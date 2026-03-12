import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import WalletPage from "./pages/WalletPage";
import ArchivePage from "./pages/ArchivePage";
import ChatbotPage from "./pages/ChatbotPage";
import MuseumPage from "./pages/MuseumPage";
import AdminPage from "./pages/AdminPage";
import DAOPage from "./pages/DAOPage";
import GuidePage from "./pages/GuidePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/chatbot" element={<ChatbotPage />} />
          <Route path="/museum" element={<MuseumPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dao" element={<DAOPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MobileNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
