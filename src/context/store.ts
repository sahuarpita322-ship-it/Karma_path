import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  odishaDestinations,
  odishaVillages,
  odishaProducts,
  odishaFolkSongs,
  odishaExperiences,
  initialProposals,
  type Destination,
  type Village,
  type Product,
  type FolkSong,
  type CulturalExperience,
  type DAOProposal
} from '../data/odishaData';
import { ALL_ODISHA_MARKETPLACE_PRODUCTS } from '../data/odishaMarketplaceData';

export type {
  Destination,
  Village,
  Product,
  FolkSong,
  CulturalExperience,
  DAOProposal
};

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
  phone?: string;
  preferredLanguage?: 'English' | 'Odia' | 'Hindi';
  homeDistrict?: string;
  interests?: string[];
  tokenBalance: number;
  totalEarned: number;
  destinationsVisited: number;
  villagesExplored: number;
  verifiedSocialActivities: number;
  localPurchases: number;
  heritageContributions: number;
  achievements: string[];
  tasksDone: number;
  photos?: Array<{
    id: string;
    url: string;
    caption: string;
    location?: string;
    date: string;
  }>;
  history: Array<{
    id: string;
    taskId?: string;
    taskTitle: string;
    date: string;
    tokens: number;
    category?: string;
    proof?: string;
    status?: 'Pending' | 'Approved' | 'Rejected' | 'Completed';
  }>;
};

export type KarmaActivityDeed = {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  activityType: 'Environmental' | 'Humanity' | 'Cultural Preservation' | 'Responsible Tourism' | string;
  category?: string;
  title: string;
  description: string;
  location: string;
  proofUrl: string;
  date: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  awardedPoints: number;
  impactMetric?: string;
  impactCount?: number;
  organizationName?: string;
  rejectionReason?: string;
  certificateId?: string;
  reviewedBy?: string;
  reviewedAt?: string;
};

export type MarketplaceOrder = {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  productImage: string;
  price: number;
  artisanName: string;
  village: string;
  orderDate: string;
  status: 'Ordered' | 'Artisan Packing' | 'Dispatched' | 'Delivered';
  karmaAwarded: number;
  trackingNumber?: string;
  deliveryAddress?: string;
  paymentMethod?: string;
};

export interface SellerApplication {
  id: string;
  name: string;
  contact: string;
  village: string;
  district: string;
  craftType: string;
  productName: string;
  productDescription: string;
  productPhotos: string[];
  price: number;
  availableStock: number;
  materialsUsed: string;
  shippingDetails: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  submittedAt: string;
}

export type SafeTrip = {
  id: string;
  userId: string;
  userName: string;
  origin: string;
  destination: string;
  transportMode: 'Car/Taxi' | 'Bus' | 'Bike' | 'Train' | 'Walking';
  expectedDuration: string;
  expectedRoute: string;
  startTime: string;
  currentLocation: { lat: number; lng: number };
  routeProgress: number; // 0 to 100
  status: 'Normal' | 'Safety Check Required' | 'SOS Triggered' | 'Emergency Contact Notified';
  trustedContacts: Array<{ name: string; phone: string; relationship: string }>;
  lastCheckInTime: string;
  alertCountdown: number;
  isTracking: boolean;
};

export type VillageSubmission = {
  id: string;
  userId: string;
  userName: string;
  villageName: string;
  district: string;
  speciality: string;
  story: string;
  mediaUrl: string;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};

export type FolkSongSubmission = {
  id: string;
  userId: string;
  userName: string;
  title: string;
  language: string;
  dialect: string;
  village: string;
  lyrics: string;
  culturalBackground: string;
  audioUrl: string;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Rejected';
};

export type ExperienceBooking = {
  id: string;
  userId: string;
  experienceId: string;
  title: string;
  village: string;
  bookingDate: string;
  guests: number;
  totalPrice: number;
  status: 'Confirmed' | 'Completed';
};

export type Language = 'en' | 'hi' | 'or';

export interface KarmaRewardConfig {
  artisanPurchase: number;
  artisanWorkshop: number;
  visitVillage: number;
  shareStory: number;
  environmentalDeed: number;
  culturalRecording: number;
}

interface AppState {
  // Theme & Language
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;

  // Authentication & Independent User Profiles
  users: UserProfile[];
  currentUser: UserProfile | null;
  karmaBalance: number;
  registerUser: (name: string, email: string, password?: string, district?: string, interests?: string[]) => void;
  loginUser: (email: string) => void;
  logoutUser: () => void;
  switchUser: (email: string) => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  addUserPhoto: (photo: { url: string; caption: string; location?: string }) => void;
  addKarma: (amount: number, reason?: string) => void;

  // Karma Task System (Preserved)
  tasks: Task[];
  completedTasks: number;
  dailyImpact: number;
  taskParticipants: Record<string, Array<{ userId: string; name: string; date: string; status: 'joined' | 'completed' }>>;
  submissions: Array<{ id: string; taskId: string; userId: string; userName: string; image: string; date: string; tokens: number; verified: boolean }>;
  activities: UserActivity[];
  completeTask: (taskId: string) => void;
  joinTask: (taskId: string, proofImage?: string) => void;
  completeTaskWithSubmission: (taskId: string, proofImage?: string) => void;
  addQuizTokens: (points: number) => void;

  // "MY KARMA JOURNEY" Deeds
  karmaDeeds: KarmaActivityDeed[];
  submitGoodDeed: (deed: Omit<KarmaActivityDeed, 'id' | 'userId' | 'userName' | 'userAvatar' | 'date' | 'status' | 'awardedPoints'>) => void;
  reviewGoodDeed: (deedId: string, status: 'Approved' | 'Rejected', rejectionReason?: string, customPoints?: number) => void;

  // Odisha Tourism Destinations
  destinations: Destination[];

  // Village Discovery Directory
  villages: Village[];
  villageSubmissions: VillageSubmission[];
  submitVillageStory: (story: Omit<VillageSubmission, 'id' | 'userId' | 'userName' | 'submittedAt' | 'status'>) => void;
  reviewVillageStory: (id: string, status: 'Approved' | 'Rejected') => void;

  // Local Hands Marketplace
  products: Product[];
  orders: MarketplaceOrder[];
  cart: Product[];
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  sellerApplications: SellerApplication[];
  submitSellerApplication: (app: Omit<SellerApplication, 'id' | 'status' | 'submittedAt'>) => void;
  reviewSellerApplication: (id: string, status: 'Approved' | 'Rejected') => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  placeOrder: (product: Product, options?: { deliveryAddress?: string; paymentMethod?: string }) => { success: boolean; karmaAwarded: number; orderId: string };

  // Digital Cultural Vault
  folkSongs: FolkSong[];
  recordedSongs: FolkSongSubmission[];
  submitRecordedSong: (song: Omit<FolkSongSubmission, 'id' | 'userId' | 'userName' | 'submittedAt' | 'status'>) => void;
  reviewFolkSong: (id: string, status: 'Approved' | 'Rejected') => void;

  // Experiences & Bookings
  experiences: CulturalExperience[];
  experienceBookings: ExperienceBooking[];
  bookExperience: (expId: string, bookingDate: string, guests: number) => { success: boolean; message: string };

  // Safe Path GPS Emergency System
  activeTrip: SafeTrip | null;
  tripsHistory: SafeTrip[];
  startTrip: (tripData: Omit<SafeTrip, 'id' | 'userId' | 'userName' | 'startTime' | 'routeProgress' | 'status' | 'lastCheckInTime' | 'alertCountdown' | 'isTracking'>) => void;
  updateTripGPS: (lat: number, lng: number, progressIncrement?: number) => void;
  triggerSafetyAlert: () => void;
  respondSafetyAlert: (safe: boolean) => void;
  triggerManualSOS: (emergencyServiceNumber?: string) => void;
  cancelSOSAlert: () => void;
  endTrip: () => void;

  // Community DAO Governance
  proposals: DAOProposal[];
  voteProposal: (proposalId: string, voteType: 'for' | 'against' | 'abstain') => void;
  karmaRewardConfig: KarmaRewardConfig;
  updateKarmaRewardConfig: (updates: Partial<KarmaRewardConfig>) => void;
}

// Clean Initial Users list (No pre-loaded accounts - visitors sign up or sign in)
const INITIAL_USERS: UserProfile[] = [
  {
    id: 'user-guardian-1',
    name: 'Arpita Sahu',
    email: 'arpita.sahu@karmapath.in',
    avatar: '/villages/berhampur.jpg',
    phone: '+91 94370 12345',
    preferredLanguage: 'Odia',
    homeDistrict: 'Ganjam',
    interests: ['Handloom', 'Pattachitra', 'Heritage Temples', 'Eco-Tourism'],
    tokenBalance: 125,
    totalEarned: 125,
    destinationsVisited: 6,
    villagesExplored: 4,
    verifiedSocialActivities: 3,
    localPurchases: 2,
    heritageContributions: 5,
    achievements: ['Heritage Explorer', 'Eco Pioneer', 'Handloom Patron', 'Master Guardian'],
    tasksDone: 3,
    photos: [
      {
        id: 'p1',
        url: '/villages/raghurajpur.jpg',
        caption: 'Pattachitra Masterpiece & Palm Leaf Scroll',
        location: 'Raghurajpur, Puri',
        date: '2026-11-14'
      },
      {
        id: 'p2',
        url: '/villages/belaguntha.jpg',
        caption: 'Traditional Brass Fish Craft (Pitala Machha)',
        location: 'Bellaguntha, Ganjam',
        date: '2026-11-12'
      },
      {
        id: 'p3',
        url: '/villages/pipili.jpg',
        caption: 'Vibrant Chandua Applique Mirror Work',
        location: 'Pipili, Puri',
        date: '2026-11-10'
      }
    ],
    history: [
      {
        id: 'h-1',
        taskTitle: 'Explored Berhampur Silk Weavers Quarter',
        date: '2026-11-15',
        tokens: 15,
        category: 'Village Exploration',
        status: 'Completed'
      },
      {
        id: 'h-2',
        taskTitle: 'Supported Bellaguntha Brass Craftsman',
        date: '2026-11-14',
        tokens: 20,
        category: 'Artisan Support',
        status: 'Completed'
      },
      {
        id: 'h-3',
        taskTitle: 'Beach Cleaning at Gopalpur-on-Sea',
        date: '2026-11-10',
        tokens: 40,
        category: 'Environmental Protection',
        status: 'Completed'
      }
    ]
  }
];

export const useStore = create(
  persist<AppState>(
    (set, get) => ({
      // Theme & Language
      isDarkMode: true, // Default to Volcanic Heritage theme
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      language: 'en',
      setLanguage: (lang) => set({ language: lang }),

      // Authentication & Users: Clean empty initial state
      users: INITIAL_USERS,
      currentUser: INITIAL_USERS[0],
      karmaBalance: 125,

      registerUser: (name, email, _password, district, interests) =>
        set((state) => {
          const existingUser = state.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
          if (existingUser) {
            return {
              currentUser: existingUser,
              karmaBalance: existingUser.tokenBalance
            };
          }
          const newUser: UserProfile = {
            id: `u-${Date.now()}`,
            name: name.trim(),
            email: email.trim().toLowerCase(),
            avatar: '/icon.svg.jpeg',
            homeDistrict: district || 'Khordha',
            interests: interests || ['Heritage', 'Eco-tourism'],
            tokenBalance: 50, // Welcome bonus Karma Tokens
            totalEarned: 50,
            destinationsVisited: 0,
            villagesExplored: 0,
            verifiedSocialActivities: 0,
            localPurchases: 0,
            heritageContributions: 0,
            achievements: ['Heritage Explorer'],
            tasksDone: 0,
            history: [
              {
                id: `h-welcome-${Date.now()}`,
                taskTitle: 'Welcome to Karma-Path Ecosystem',
                date: new Date().toISOString().split('T')[0],
                tokens: 50,
                category: 'Community',
                status: 'Completed'
              }
            ]
          };
          return {
            users: [newUser, ...state.users],
            currentUser: newUser,
            karmaBalance: 50
          };
        }),

      loginUser: (email) =>
        set((state) => {
          const found = state.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
          if (found) {
            return {
              currentUser: found,
              karmaBalance: found.tokenBalance
            };
          }
          return {};
        }),

      logoutUser: () => set({ currentUser: null, karmaBalance: 0 }),

      switchUser: (email) =>
        set((state) => {
          const target = state.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
          if (target) {
            return {
              currentUser: target,
              karmaBalance: target.tokenBalance
            };
          }
          return {};
        }),

      updateUserProfile: (updates) =>
        set((state) => {
          if (!state.currentUser) return {};
          const updated = { ...state.currentUser, ...updates };
          return {
            currentUser: updated,
            users: state.users.map((u) => (u.id === updated.id ? updated : u))
          };
        }),

      addUserPhoto: (photo) =>
        set((state) => {
          if (!state.currentUser) return {};
          const newPhoto = {
            id: `photo-${Date.now()}`,
            url: photo.url,
            caption: photo.caption,
            location: photo.location || 'Odisha',
            date: new Date().toISOString().split('T')[0]
          };
          const currentPhotos = state.currentUser.photos || [];
          const updated = {
            ...state.currentUser,
            photos: [newPhoto, ...currentPhotos],
            tokenBalance: state.currentUser.tokenBalance + 10,
            heritageContributions: (state.currentUser.heritageContributions || 0) + 1
          };
          return {
            currentUser: updated,
            karmaBalance: state.karmaBalance + 10,
            users: state.users.map((u) => (u.id === updated.id ? updated : u))
          };
        }),

      addKarma: (amount, reason) =>
        set((state) => {
          if (!state.currentUser) return {};
          const updatedUser: UserProfile = {
            ...state.currentUser,
            tokenBalance: state.currentUser.tokenBalance + amount,
            totalEarned: state.currentUser.totalEarned + amount,
            history: [
              {
                id: `h-${Date.now()}`,
                taskTitle: reason || 'Earned Karma Points',
                date: new Date().toISOString().split('T')[0],
                tokens: amount,
                status: 'Approved'
              },
              ...state.currentUser.history
            ]
          };
          return {
            karmaBalance: updatedUser.tokenBalance,
            currentUser: updatedUser,
            users: state.users.map((u) => (u.id === updatedUser.id ? updatedUser : u))
          };
        }),

      // Tasks (Preserved & Enhanced)
      tasks: [
        { id: '1', title: 'Beach Plastic Cleanup at Puri', description: 'Collect and segregate non-biodegradable waste from Puri Blue Flag beach.', location: 'Puri, Odisha', difficulty: 'Easy', time: '2h', reward: 25, progress: 0, category: 'Beach', completed: false },
        { id: '2', title: 'Document Rare Bird Species in Similipal', description: 'Record sightings with high-res photos and GPS tags for biodiversity census.', location: 'Similipal National Park', difficulty: 'Hard', time: '4h', reward: 50, progress: 0, category: 'Wildlife' },
        { id: '3', title: 'Help Nuapatna Artisan Digitize Ikat Weaving', description: 'Photograph handloom processes and document weaver stories for Local Hands.', location: 'Nuapatna, Cuttack', difficulty: 'Medium', time: '3h', reward: 35, progress: 0, category: 'Culture' },
        { id: '4', title: 'Conduct Eco-Tourism Awareness at Daringbadi', description: 'Engage local tourists on responsible plastic disposal in pine forests.', location: 'Daringbadi, Kandhamal', difficulty: 'Medium', time: '3h', reward: 30, progress: 0, category: 'Education' }
      ],
      completedTasks: 4,
      dailyImpact: 140,
      taskParticipants: {},
      submissions: [],
      activities: [],

      completeTask: (taskId) =>
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === taskId ? { ...t, completed: true } : t)),
          completedTasks: state.completedTasks + 1
        })),

      joinTask: (taskId, proofImage) =>
        set((state) => {
          if (!state.currentUser) return {};
          const user = state.currentUser;
          const current = state.taskParticipants[taskId] ?? [];
          return {
            taskParticipants: {
              ...state.taskParticipants,
              [taskId]: [...current, { userId: user.id, name: user.name, date: new Date().toISOString().split('T')[0], status: 'joined' }]
            },
            submissions: [
              ...state.submissions,
              { id: `s${Date.now()}`, taskId, userId: user.id, userName: user.name, image: proofImage ?? '', date: new Date().toISOString(), tokens: 0, verified: false }
            ]
          };
        }),

      completeTaskWithSubmission: (taskId, proofImage) =>
        set((state) => {
          if (!state.currentUser) return {};
          const task = state.tasks.find((t) => t.id === taskId);
          if (!task) return {};
          const user = state.currentUser;
          const today = new Date().toISOString().split('T')[0];

          const updatedUser: UserProfile = {
            ...user,
            tokenBalance: user.tokenBalance + task.reward,
            totalEarned: user.totalEarned + task.reward,
            tasksDone: user.tasksDone + 1,
            history: [
              { id: `h-${Date.now()}`, taskId, taskTitle: task.title, date: today, tokens: task.reward, proof: proofImage, status: 'Completed' },
              ...user.history
            ]
          };

          const newActivity: UserActivity = {
            id: `a${Date.now()}`,
            avatar: user.avatar,
            name: user.name,
            description: `completed ${task.title}`,
            location: task.location,
            tokens: task.reward,
            image: proofImage || '/culture-grid.jpg',
            date: 'Just now'
          };

          return {
            tasks: state.tasks.map((t) => (t.id === taskId ? { ...t, completed: true } : t)),
            completedTasks: state.completedTasks + 1,
            karmaBalance: updatedUser.tokenBalance,
            currentUser: updatedUser,
            users: state.users.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
            activities: [newActivity, ...state.activities]
          };
        }),

      addQuizTokens: (points) =>
        set((state) => {
          if (!state.currentUser) return {};
          const user = {
            ...state.currentUser,
            tokenBalance: state.currentUser.tokenBalance + points,
            totalEarned: state.currentUser.totalEarned + points,
            history: [
              { id: `hq-${Date.now()}`, taskTitle: 'Odia Heritage Cultural Quiz', date: new Date().toISOString().split('T')[0], tokens: points, status: 'Completed' as const },
              ...state.currentUser.history
            ]
          };
          return {
            karmaBalance: user.tokenBalance,
            currentUser: user,
            users: state.users.map((u) => (u.id === user.id ? user : u))
          };
        }),

      // "MY KARMA JOURNEY" Deeds
      karmaDeeds: [
        {
          id: 'kd-1',
          userId: 'u-arpita',
          userName: 'Arpita Sahu',
          userAvatar: '/culture-grid.jpg',
          activityType: 'Environmental',
          title: 'Collected 12kg Plastic Waste at Chandrabhaga Beach',
          description: 'Organized a morning plastic cleanup with 4 fellow tourists along the Konark-Chandrabhaga coast, properly segregating bottles and fishing net fragments.',
          location: 'Chandrabhaga Beach, Puri',
          proofUrl: '/culture-grid.jpg',
          date: '2026-11-12',
          status: 'Approved',
          awardedPoints: 25
        },
        {
          id: 'kd-2',
          userId: 'u-arpita',
          userName: 'Arpita Sahu',
          userAvatar: '/culture-grid.jpg',
          activityType: 'Cultural Preservation',
          title: 'Documented Palm-Leaf Stylus Etching with Guru Rabindra',
          description: 'Recorded step-by-step video instructions of ancient iron stylus palm leaf engraving to preserve the art for the community vault.',
          location: 'Raghurajpur Village, Puri',
          proofUrl: '/culture-grid.jpg',
          date: '2026-11-13',
          status: 'Approved',
          awardedPoints: 30
        },
        {
          id: 'kd-3',
          userId: 'u-prasiddhi',
          userName: 'Prasiddhi Mohapatra',
          userAvatar: '/culture-grid.jpg',
          activityType: 'Environmental',
          title: 'Planted 15 Sal Saplings at Debrigarh Buffer Zone',
          description: 'Participated in community afforestation initiative with the local Van Suraksha Samiti (VSS).',
          location: 'Debrigarh Sanctuary, Bargarh',
          proofUrl: '/culture-grid.jpg',
          date: '2026-11-14',
          status: 'Pending',
          awardedPoints: 20
        }
      ],

      submitGoodDeed: (deed) =>
        set((state) => {
          if (!state.currentUser) return {};
          const user = state.currentUser;
          const newDeed: KarmaActivityDeed = {
            ...deed,
            id: `kd-${Date.now()}`,
            userId: user.id,
            userName: user.name,
            userAvatar: user.avatar,
            date: new Date().toISOString().split('T')[0],
            status: 'Pending',
            awardedPoints: 0
          };
          return {
            karmaDeeds: [newDeed, ...state.karmaDeeds]
          };
        }),

      reviewGoodDeed: (deedId, status, rejectionReason, customPoints) =>
        set((state) => {
          const deed = state.karmaDeeds.find((d) => d.id === deedId);
          if (!deed) return {};

          let points = customPoints || 25;
          if (!customPoints) {
            if (deed.activityType === 'Environmental') points = state.karmaRewardConfig.environmentalDeed;
            else if (deed.activityType === 'Cultural Preservation') points = state.karmaRewardConfig.culturalRecording;
            else if (deed.activityType === 'Humanity') points = 30;
            else if (deed.activityType === 'Responsible Tourism') points = state.karmaRewardConfig.visitVillage;
          }

          const certificateId = status === 'Approved' ? `KP-CERT-${Date.now().toString().slice(-6)}` : undefined;

          const updatedDeeds = state.karmaDeeds.map((d) =>
            d.id === deedId
              ? {
                  ...d,
                  status,
                  awardedPoints: status === 'Approved' ? points : 0,
                  rejectionReason: status === 'Rejected' ? (rejectionReason || 'Proof does not meet verification requirements.') : undefined,
                  certificateId,
                  reviewedBy: 'Authorized Moderator',
                  reviewedAt: new Date().toISOString().split('T')[0]
                }
              : d
          );

          if (status === 'Approved') {
            const targetUser = state.users.find((u) => u.id === deed.userId);
            if (targetUser) {
              const updatedTarget: UserProfile = {
                ...targetUser,
                tokenBalance: targetUser.tokenBalance + points,
                totalEarned: targetUser.totalEarned + points,
                verifiedSocialActivities: targetUser.verifiedSocialActivities + 1,
                history: [
                  { id: `h-${Date.now()}`, taskTitle: `Verified Deed: ${deed.title}`, date: new Date().toISOString().split('T')[0], tokens: points, status: 'Approved' },
                  ...targetUser.history
                ]
              };
              const isCurrent = state.currentUser?.id === targetUser.id;
              return {
                karmaDeeds: updatedDeeds,
                users: state.users.map((u) => (u.id === targetUser.id ? updatedTarget : u)),
                currentUser: isCurrent ? updatedTarget : state.currentUser,
                karmaBalance: isCurrent ? updatedTarget.tokenBalance : state.karmaBalance
              };
            }
          }
          return { karmaDeeds: updatedDeeds };
        }),

      // Destinations
      destinations: odishaDestinations,

      // Villages
      villages: odishaVillages,
      villageSubmissions: [],
      submitVillageStory: (story) =>
        set((state) => {
          if (!state.currentUser) return {};
          const sub: VillageSubmission = {
            ...story,
            id: `vs-${Date.now()}`,
            userId: state.currentUser.id,
            userName: state.currentUser.name,
            submittedAt: new Date().toISOString().split('T')[0],
            status: 'Pending'
          };
          return {
            villageSubmissions: [sub, ...state.villageSubmissions]
          };
        }),

      reviewVillageStory: (id, status) =>
        set((state) => {
          const sub = state.villageSubmissions.find((s) => s.id === id);
          if (!sub) return {};
          const updated = state.villageSubmissions.map((s) => (s.id === id ? { ...s, status } : s));

          if (status === 'Approved') {
            const user = state.users.find((u) => u.id === sub.userId);
            const reward = state.karmaRewardConfig.shareStory;
            if (user) {
              const updatedUser: UserProfile = {
                ...user,
                tokenBalance: user.tokenBalance + reward,
                totalEarned: user.totalEarned + reward,
                heritageContributions: user.heritageContributions + 1,
                history: [
                  { id: `h-${Date.now()}`, taskTitle: `Approved Village Story: ${sub.villageName}`, date: new Date().toISOString().split('T')[0], tokens: reward, status: 'Approved' },
                  ...user.history
                ]
              };
              const isCurrent = state.currentUser?.id === user.id;
              return {
                villageSubmissions: updated,
                users: state.users.map((u) => (u.id === user.id ? updatedUser : u)),
                currentUser: isCurrent ? updatedUser : state.currentUser,
                karmaBalance: isCurrent ? updatedUser.tokenBalance : state.karmaBalance
              };
            }
          }
          return { villageSubmissions: updated };
        }),

      // Marketplace & Cart
      products: ALL_ODISHA_MARKETPLACE_PRODUCTS,
      orders: [
        {
          id: 'ord-1',
          userId: 'u-arpita',
          productId: 'p-pat-01',
          productName: 'Master Pattachitra Painting: "Lord Jagannath with Sacred Parivara"',
          productImage: '/culture-grid.jpg',
          price: 1850,
          artisanName: 'Guru Rabindra Maharana',
          village: 'Raghurajpur Heritage Village',
          orderDate: '2026-11-05',
          status: 'Delivered',
          karmaAwarded: 25,
          trackingNumber: 'OD-KP-88419'
        },
        {
          id: 'ord-2',
          userId: 'u-arpita',
          productId: 'p-pipili-01',
          productName: 'Pipili Applique & Mirror-Work Auspicious Elephant Wall Hanging',
          productImage: '/culture-grid.jpg',
          price: 650,
          artisanName: 'Rehana Begum',
          village: 'Pipili',
          orderDate: '2026-11-09',
          status: 'Dispatched',
          karmaAwarded: 20,
          trackingNumber: 'OD-KP-93104'
        }
      ],
      cart: [],
      wishlist: [],
      toggleWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.includes(productId)
            ? state.wishlist.filter((id) => id !== productId)
            : [...state.wishlist, productId]
        })),
      sellerApplications: [
        {
          id: 'app-1',
          name: 'Niranjan Maharana',
          contact: '9437108821',
          village: 'Raghurajpur',
          district: 'Puri',
          craftType: 'Pattachitra & Palm-leaf Art',
          productName: 'Hand-painted Ganesha Talapatra Wall Panel',
          productDescription: 'Intricate 12x4 inch palm leaf carving with natural vegetable dyes.',
          productPhotos: ['/culture-grid.jpg'],
          price: 750,
          availableStock: 15,
          materialsUsed: 'Palm leaf, iron stylus, lampblack',
          shippingDetails: 'Direct from Raghurajpur post office in 2 days',
          status: 'Pending',
          submittedAt: '2026-11-14'
        }
      ],
      submitSellerApplication: (app) =>
        set((state) => ({
          sellerApplications: [
            {
              ...app,
              id: `sel-${Date.now()}`,
              status: 'Pending',
              submittedAt: new Date().toISOString().split('T')[0]
            },
            ...state.sellerApplications
          ]
        })),
      reviewSellerApplication: (id, status) =>
        set((state) => ({
          sellerApplications: state.sellerApplications.map((a) =>
            a.id === id ? { ...a, status } : a
          )
        })),
      addProduct: (product) =>
        set((state) => ({
          products: [product, ...state.products]
        })),
      updateProduct: (product) =>
        set((state) => ({
          products: state.products.map((p) => (p.id === product.id ? product : p))
        })),
      deleteProduct: (productId) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== productId)
        })),
      addToCart: (product) =>
        set((state) => {
          if (state.cart.some((p) => p.id === product.id)) return {};
          return { cart: [...state.cart, product] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({ cart: state.cart.filter((p) => p.id !== productId) })),
      clearCart: () => set({ cart: [] }),

      placeOrder: (product, options) => {
        const state = get();
        const user = state.currentUser;
        const reward = product.karmaReward || state.karmaRewardConfig.artisanPurchase;
        const orderId = `ord-${Date.now()}`;

        const newOrder: MarketplaceOrder = {
          id: orderId,
          userId: user?.id || 'guest-user',
          productId: product.id,
          productName: product.name,
          productImage: product.images[0] || '/culture-grid.jpg',
          price: product.price,
          artisanName: product.artisanName,
          village: product.village,
          orderDate: new Date().toISOString().split('T')[0],
          status: 'Ordered',
          karmaAwarded: reward,
          trackingNumber: `OD-KP-${Math.floor(10000 + Math.random() * 90000)}`,
          deliveryAddress: options?.deliveryAddress,
          paymentMethod: options?.paymentMethod || 'UPI / Online'
        };

        if (user) {
          const updatedUser: UserProfile = {
            ...user,
            tokenBalance: user.tokenBalance + reward,
            totalEarned: user.totalEarned + reward,
            localPurchases: user.localPurchases + 1,
            history: [
              {
                id: `h-${Date.now()}`,
                taskTitle: `Supported Local Artisan: Purchased ${product.name}`,
                date: new Date().toISOString().split('T')[0],
                tokens: reward,
                category: 'Marketplace',
                status: 'Completed'
              },
              ...user.history
            ]
          };

          set({
            orders: [newOrder, ...state.orders],
            currentUser: updatedUser,
            users: state.users.map((u) => (u.id === user.id ? updatedUser : u)),
            karmaBalance: updatedUser.tokenBalance,
            cart: state.cart.filter((p) => p.id !== product.id)
          });
        } else {
          set({
            orders: [newOrder, ...state.orders],
            cart: state.cart.filter((p) => p.id !== product.id)
          });
        }

        return { success: true, karmaAwarded: reward, orderId };
      },

      // Cultural Vault
      folkSongs: odishaFolkSongs,
      recordedSongs: [],
      submitRecordedSong: (song) =>
        set((state) => {
          if (!state.currentUser) return {};
          const sub: FolkSongSubmission = {
            ...song,
            id: `fss-${Date.now()}`,
            userId: state.currentUser.id,
            userName: state.currentUser.name,
            submittedAt: new Date().toISOString().split('T')[0],
            status: 'Pending'
          };
          return {
            recordedSongs: [sub, ...state.recordedSongs]
          };
        }),

      reviewFolkSong: (id, status) =>
        set((state) => {
          const song = state.recordedSongs.find((s) => s.id === id);
          if (!song) return {};
          const updated = state.recordedSongs.map((s) => (s.id === id ? { ...s, status } : s));

          if (status === 'Approved') {
            const reward = state.karmaRewardConfig.culturalRecording;
            const user = state.users.find((u) => u.id === song.userId);
            if (user) {
              const updatedUser: UserProfile = {
                ...user,
                tokenBalance: user.tokenBalance + reward,
                totalEarned: user.totalEarned + reward,
                heritageContributions: user.heritageContributions + 1,
                history: [
                  { id: `h-${Date.now()}`, taskTitle: `Folk Song Verified: ${song.title}`, date: new Date().toISOString().split('T')[0], tokens: reward, status: 'Approved' },
                  ...user.history
                ]
              };
              const isCurrent = state.currentUser?.id === user.id;
              return {
                recordedSongs: updated,
                users: state.users.map((u) => (u.id === user.id ? updatedUser : u)),
                currentUser: isCurrent ? updatedUser : state.currentUser,
                karmaBalance: isCurrent ? updatedUser.tokenBalance : state.karmaBalance
              };
            }
          }
          return { recordedSongs: updated };
        }),

      // Experiences
      experiences: odishaExperiences,
      experienceBookings: [],
      bookExperience: (expId, bookingDate, guests) => {
        const state = get();
        if (!state.currentUser) return { success: false, message: 'Please login to book.' };
        const exp = state.experiences.find((e) => e.id === expId);
        if (!exp) return { success: false, message: 'Experience not found.' };

        if (state.currentUser.tokenBalance < exp.requiredKarma) {
          return {
            success: false,
            message: `Requires minimum ${exp.requiredKarma} Karma Points. You have ${state.currentUser.tokenBalance} KP.`
          };
        }

        const newBooking: ExperienceBooking = {
          id: `eb-${Date.now()}`,
          userId: state.currentUser.id,
          experienceId: exp.id,
          title: exp.title,
          village: exp.village,
          bookingDate,
          guests,
          totalPrice: exp.price * guests,
          status: 'Confirmed'
        };

        const reward = state.karmaRewardConfig.artisanWorkshop;
        const updatedUser: UserProfile = {
          ...state.currentUser,
          tokenBalance: state.currentUser.tokenBalance + reward,
          totalEarned: state.currentUser.totalEarned + reward,
          history: [
            {
              id: `h-${Date.now()}`,
              taskTitle: `Booked Workshop: ${exp.title}`,
              date: new Date().toISOString().split('T')[0],
              tokens: reward,
              status: 'Approved'
            },
            ...state.currentUser.history
          ]
        };

        set({
          experienceBookings: [newBooking, ...state.experienceBookings],
          currentUser: updatedUser,
          users: state.users.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
          karmaBalance: updatedUser.tokenBalance
        });

        return {
          success: true,
          message: `Booking Confirmed! You unlocked this workshop and earned +${reward} Karma Points.`
        };
      },

      // Safe Path GPS Emergency System
      activeTrip: null,
      tripsHistory: [],

      startTrip: (tripData) =>
        set((state) => {
          if (!state.currentUser) return {};
          const trip: SafeTrip = {
            ...tripData,
            id: `trip-${Date.now()}`,
            userId: state.currentUser.id,
            userName: state.currentUser.name,
            startTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            routeProgress: 0,
            status: 'Normal',
            lastCheckInTime: 'Just now',
            alertCountdown: 60,
            isTracking: true
          };
          return { activeTrip: trip };
        }),

      updateTripGPS: (lat, lng, progressIncrement = 5) =>
        set((state) => {
          if (!state.activeTrip) return {};
          const newProgress = Math.min(100, state.activeTrip.routeProgress + progressIncrement);
          return {
            activeTrip: {
              ...state.activeTrip,
              currentLocation: { lat, lng },
              routeProgress: newProgress,
              lastCheckInTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          };
        }),

      triggerSafetyAlert: () =>
        set((state) => {
          if (!state.activeTrip) return {};
          return {
            activeTrip: {
              ...state.activeTrip,
              status: 'Safety Check Required',
              alertCountdown: 60
            }
          };
        }),

      respondSafetyAlert: (safe) =>
        set((state) => {
          if (!state.activeTrip) return {};
          if (safe) {
            return {
              activeTrip: {
                ...state.activeTrip,
                status: 'Normal',
                alertCountdown: 60,
                lastCheckInTime: 'Verified Safe just now'
              }
            };
          } else {
            // Trigger emergency workflow
            return {
              activeTrip: {
                ...state.activeTrip,
                status: 'SOS Triggered'
              }
            };
          }
        }),

      triggerManualSOS: () =>
        set((state) => {
          if (!state.activeTrip) return {};
          return {
            activeTrip: {
              ...state.activeTrip,
              status: 'SOS Triggered'
            }
          };
        }),

      cancelSOSAlert: () =>
        set((state) => {
          if (!state.activeTrip) return {};
          return {
            activeTrip: {
              ...state.activeTrip,
              status: 'Normal',
              alertCountdown: 60
            }
          };
        }),

      endTrip: () =>
        set((state) => {
          if (!state.activeTrip) return {};
          const completedTrip = { ...state.activeTrip, isTracking: false };
          return {
            activeTrip: null,
            tripsHistory: [completedTrip, ...state.tripsHistory]
          };
        }),

      // Community DAO Governance
      proposals: initialProposals,
      voteProposal: (proposalId, voteType) =>
        set((state) => ({
          proposals: state.proposals.map((p) => {
            if (p.id !== proposalId) return p;
            if (p.hasVoted) return p; // Prevent double vote
            return {
              ...p,
              votesFor: voteType === 'for' ? p.votesFor + 1 : p.votesFor,
              votesAgainst: voteType === 'against' ? p.votesAgainst + 1 : p.votesAgainst,
              votesAbstain: voteType === 'abstain' ? p.votesAbstain + 1 : p.votesAbstain,
              hasVoted: voteType
            };
          })
        })),

      karmaRewardConfig: {
        artisanPurchase: 20,
        artisanWorkshop: 30,
        visitVillage: 15,
        shareStory: 10,
        environmentalDeed: 25,
        culturalRecording: 30
      },

      updateKarmaRewardConfig: (updates) =>
        set((state) => ({
          karmaRewardConfig: { ...state.karmaRewardConfig, ...updates }
        }))
    }),
    {
      name: 'karma-path-storage-clean-v14',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
