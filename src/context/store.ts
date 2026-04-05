import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Task = {
  id: string;
  title: string;
  description: string;
  location: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  time: string;
  reward: number;
  progress: number;
  category: 'Beach' | 'Wildlife' | 'Culture' | 'Education';
  completed?: boolean;
};

export type UserActivity = {
  id: string;
  avatar: string;
  name: string;
  description: string;
  location: string;
  tokens: number;
  image: string;
  date: string;
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  tokenBalance: number;
  totalEarned: number;
  tasksDone: number;
  history: Array<{ taskId: string; taskTitle: string; date: string; tokens: number; proof?: string }>;
};

export type TaskParticipant = { userId: string; name: string; date: string; status: 'joined' | 'completed' };

export type Submission = { id: string; taskId: string; userId: string; userName: string; image: string; date: string; tokens: number; verified: boolean };

export type Language = 'en' | 'hi' | 'or';

interface AppState {
  karmaBalance: number;
  dailyImpact: number;
  completedTasks: number;
  tasks: Task[];
  activities: UserActivity[];
  users: UserProfile[];
  currentUser: UserProfile | null;
  submissions: Submission[];
  taskParticipants: Record<string, TaskParticipant[]>;
  setKarma: (amount: number) => void;
  addKarma: (amount: number) => void;
  completeTask: (taskId: string) => void;
  addActivity: (activity: UserActivity) => void;
  registerUser: (name: string, email: string) => void;
  loginUser: (email: string) => void;
  logoutUser: () => void;
  joinTask: (taskId: string, proofImage?: string) => void;
  completeTaskWithSubmission: (taskId: string, proofImage?: string) => void;
  addQuizTokens: (points: number) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create(
  persist<AppState>(
  (set, _get) => ({
  karmaBalance: 0,
  dailyImpact: 0,
  completedTasks: 0,
  tasks: [
    { id: '1', title: 'Beach Plastic Cleanup', description: 'Collect plastic from Puri shorelines.', location: 'Puri, Odisha', difficulty: 'Easy', time: '2h', reward: 20, progress: 0, category: 'Beach', completed: false },
    { id: '2', title: 'Document Rare Bird Species', description: 'Record sightings with photos and GPS', location: 'Similipal National Park', difficulty: 'Hard', time: '4h', reward: 50, progress: 0, category: 'Wildlife' },
    { id: '3', title: 'Help Artisan Digitize Handicrafts', description: 'Upload products, write stories.', location: 'Bhubaneswar', difficulty: 'Medium', time: '3h', reward: 35, progress: 0, category: 'Culture' },
    { id: '4', title: 'Attend Eco Awareness Workshop', description: 'Lead a volunteer community session.', location: 'Odisha Village', difficulty: 'Medium', time: '3h', reward: 30, progress: 0, category: 'Education' }
  ],
  activities: [],
  users: [
    { id: 'u1', name: 'Arpita Sahu', email: 'arpita.sahu@gmail.com', avatar: 'https://i.pravatar.cc/60?img=12', tokenBalance: 0, totalEarned: 0, tasksDone: 0, history: [] }
  ],
  currentUser: null,
  submissions: [],
  taskParticipants: {},
  setKarma: (amount) => set({ karmaBalance: amount }),
  addKarma: (amount) => set((state) => ({ karmaBalance: state.karmaBalance + amount, currentUser: state.currentUser ? { ...state.currentUser, tokenBalance: state.currentUser.tokenBalance + amount, totalEarned: state.currentUser.totalEarned + amount } : null })),
  completeTask: (taskId) => set((state) => ({
    tasks: state.tasks.map((t) => t.id === taskId ? { ...t, completed: true } : t),
    completedTasks: state.completedTasks + 1
  })),
  addActivity: (activity) => set((state) => ({ activities: [activity, ...state.activities] })),
  registerUser: (name, email) => set((state) => {
    const existingUser = state.users.find((u) => u.email === email);
    if (existingUser) {
      // If user exists, just log them in without bonus
      return { currentUser: existingUser, karmaBalance: existingUser.tokenBalance };
    }

    const newUser = {
      id: `u${Date.now()}`,
      name,
      email,
      avatar: `https://i.pravatar.cc/60?img=${Math.floor(Math.random() * 70)}`,
      tokenBalance: 250, // One-time sign-up bonus
      totalEarned: 250,
      tasksDone: 0,
      history: []
    };

    return {
      users: [newUser, ...state.users],
      currentUser: newUser,
      karmaBalance: 250
    };
  }),
  loginUser: (email) => set((state) => {
    const user = state.users.find((u) => u.email === email);
    if (user) {
      return {
        currentUser: user,
        karmaBalance: user.tokenBalance,
      };
    }
    return { currentUser: null };
  }),
  logoutUser: () => set({ currentUser: null, karmaBalance: 0 }),
  joinTask: (taskId, proofImage) => set((state) => {
    if (!state.currentUser) return state;
    const user = state.currentUser;
    const participant: TaskParticipant = { userId: user.id, name: user.name, date: new Date().toISOString().split('T')[0], status: 'joined' };
    const current = state.taskParticipants[taskId] ?? [];
    const updatedParticipants = [...current, participant];
    const updatedSubmission: Submission = { id: `s${Date.now()}`, taskId, userId: user.id, userName: user.name, image: proofImage ?? '', date: new Date().toISOString(), tokens: 0, verified: false };
    return {
      taskParticipants: { ...state.taskParticipants, [taskId]: updatedParticipants },
      submissions: [...state.submissions, updatedSubmission]
    };
  }),
  completeTaskWithSubmission: (taskId, proofImage) => set((state) => {
    if (!state.currentUser) return state;
    const task = state.tasks.find((t) => t.id === taskId);
    if (!task) return state;
    const user = state.currentUser;
    const today = new Date().toISOString().split('T')[0];
    const participant: TaskParticipant = { userId: user.id, name: user.name, date: today, status: 'completed' };
    const currentParticipants = state.taskParticipants[taskId] ?? [];
    const existing = currentParticipants.filter((p) => p.userId !== user.id);
    const updatedParticipants = [...existing, participant];
    const submission: Submission = { id: `s${Date.now()}`, taskId, userId: user.id, userName: user.name, image: proofImage ?? '', date: new Date().toISOString(), tokens: task.reward, verified: true };
    const updatedAct: UserActivity = { id: `a${Date.now()}`, avatar: user.avatar, name: user.name, description: `completed ${task.title}`, location: task.location, tokens: task.reward, image: submission.image || 'https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg', date: 'just now' };

    const updatedUserProfile = { ...user, tokenBalance: user.tokenBalance + task.reward, totalEarned: user.totalEarned + task.reward, tasksDone: user.tasksDone + 1, history: [...user.history, { taskId, taskTitle: task.title, date: today, tokens: task.reward, proof: submission.image }] };

    return {
      tasks: state.tasks.map((t) => t.id === taskId ? { ...t, completed: true } : t),
      completedTasks: state.completedTasks + 1,
      karmaBalance: state.karmaBalance + task.reward,
      activities: [updatedAct, ...state.activities],
      currentUser: updatedUserProfile,
      users: state.users.map((u) => u.id === updatedUserProfile.id ? updatedUserProfile : u),
      taskParticipants: { ...state.taskParticipants, [taskId]: updatedParticipants },
      submissions: [...state.submissions, submission]
    };
  }),
  addQuizTokens: (points) => set((state) => {
    if (!state.currentUser) return state;
    const user = { ...state.currentUser, tokenBalance: state.currentUser.tokenBalance + points, totalEarned: state.currentUser.totalEarned + points };
    return { karmaBalance: state.karmaBalance + points, currentUser: user, users: state.users.map((u) => u.id === user.id ? user : u) };
  }),
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),
  updateUserProfile: (updates) => set((state) => {
    if (!state.currentUser) return state;
    const updatedUser = { ...state.currentUser, ...updates };
    return {
      currentUser: updatedUser,
      users: state.users.map((u) => u.id === updatedUser.id ? updatedUser : u)
    };
  }),
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}),
  {
    name: 'karma-path-storage', // name of item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  }
));
