import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListingDetails from "./components/ListingDetails";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Profile from "./pages/Profile"
import Apartments from "./pages/Apartments";
import Lodges from "./pages/Lodges";
import Agent from "./pages/Agent";
import AgentDashboard from "./pages/agent/Dashboard";
import AgentPost from "./pages/agent/Post";
import AdminLogin from "./pages/auth/AdminLogin";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminSettings from "./pages/admin/Settings";
import Maintainance from "./pages/Maintainance";
import Users from "./pages/admin/Users";
import Properties from "./pages/admin/Properties";
import Review from "./pages/admin/Review";
import Bookings from "./pages/admin/Bookings";
import Revenue from "./pages/admin/Revenue";
import Kyc from "./pages/admin/Kyc";
import KycApplication from "./pages/admin/KycApplication";
import UserProfile from "./pages/admin/UserProfile";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listingDetails" element={<ListingDetails />} />
      <Route path="/auth/Login" element={<Login />} />
      <Route path="/auth/Signup" element={<Signup />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Lodges" element={<Lodges />} />
      <Route path="/Apartments" element={<Apartments />} />
      <Route path="/Agent" element={<Agent />} />
      <Route path="/Agent/Dashboard" element={<AgentDashboard />} />
      <Route path="/Agent/Post" element={<AgentPost />} />
      <Route path="/auth/AdminLogin" element={<AdminLogin />} />
      <Route path="/admin/Dashboard" element={<AdminDashboard />} />
      <Route path="/admin/Settings" element={<AdminSettings />} />
      <Route path="/Maintainance" element={<Maintainance />} />
      <Route path="/admin/Users" element={<Users />} />
      <Route path="/admin/Properties" element={<Properties />} />
      <Route path="/admin/Review" element={<Review />} />
      <Route path="/admin/Bookings" element={<Bookings />} />
      <Route path="/admin/Revenue" element={<Revenue />} />
      <Route path="/Admin/KycApplication/Details" element={<Kyc />} />
      <Route path="/admin/KycApplication" element={<KycApplication />} />
      <Route path="/admin/UserProfile" element={<UserProfile />} />
      
      {/* Catch-all route for undefined paths */}
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default App
