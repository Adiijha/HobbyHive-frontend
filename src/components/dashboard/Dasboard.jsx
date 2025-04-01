import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import game from "../../assets/game.png";
import sunset from "../../assets/sunset.jpg";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import p4 from "../../assets/4.png";
import p5 from "../../assets/5.png";
import { Bell, MessageCircle, Heart, Plus, Users, Image, Send, LogOut, Home, User, Settings, HelpCircle } from "lucide-react";

function Dashboard() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    dispatch(logout());
    window.location.href = "/";
  };

  const stories = [
    { id: 1, img: p1, name: "John Doe" },
    { id: 2, img: p2, name: "Jane Smith" },
    { id: 3, img: p3, name: "Alex Carter" },
    { id: 4, img: p4, name: "Emily Johnson" },
  ];

  const posts = [
    {
      id: 1,
      user: "John Doe",
      avatar: p1,
      hobby: "Photography",
      content: "Captured this amazing sunset today! 🌅",
      image: sunset,
      likes: 120,
      comments: 34,
    },
    {
      id: 2,
      user: "Emma Brown",
      avatar: p2,
      hobby: "Gaming",
      content: "Finally hit Diamond rank! Who else plays Valorant?",
      image: game,
      likes: 200,
      comments: 45,
    },
  ];

  const trendingTopics = [
    "Photography Tips ",
    "Top Gaming Strategies ",
    "Healthy Recipes ",
    "Coding Challenges ",
    "Best Travel Destinations ",
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-somig to-beige font-pop">
      {/* Left Sidebar */}
      <aside className="w-60 p-6 flex flex-col justify-between bg-white rounded-lg shadow-md fixed top-0 left-0 h-full">
        <div>
          <h1 className="text-pink-600 font-bnt font-bold text-5xl mb-6">HOBBYHIVE</h1>
          <nav className="space-y-3">
            {/* Home Section */}
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
              <Home size={22} /> Home
            </button>

            {/* Friends Section */}
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
              <Users size={22} /> Friends
            </button>

            {/* Notifications Section */}
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
              <Bell size={22} /> Notifications
            </button>

            {/* Messages Section */}
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
              <MessageCircle size={22} /> Messages
            </button>

            {/* Profile Section */}
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
              <User size={22} /> Profile
            </button>

            {/* Settings Section */}
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
              <Settings size={22} /> Settings
            </button>

            {/* Help Section */}
            <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 w-full">
              <HelpCircle size={22} /> Help
            </button>
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-lg bg-red-600 hover:bg-red-700 w-full text-white mt-6"
        >
          <LogOut size={22} /> Logout
        </button>
      </aside>

      {/* Center Section */}
      <div className="flex-1 p-6 ml-64 pt-24 overflow-y-auto mr-80">
        {/* Navbar */}
        <header className="w-full flex justify-between items-center p-4 bg-white rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold">Welcome Aditya!</h2>
          <div className="flex items-center gap-4">
            <button
              className="relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <Bell size={28} className="text-black hover:text-gray-600 transition" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-2 py-0.5 rounded-full text-white">
                3
              </span>
            </button>
            <img
              src={p5}
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-400"
            />
          </div>
        </header>

        {/* Notification Dropdown */}
{showNotifications && (
  <motion.div
    className="absolute top-16 right-6 bg-white p-4 rounded-2xl shadow-lg w-72 border border-gray-300 z-50"  
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
  >
    <p className="text-sm font-semibold">🔔 Notifications</p>
    <ul className="mt-3 space-y-2 text-sm">
      <li className="bg-gray-100 p-3 rounded-lg">📷 Alex liked your post</li>
      <li className="bg-gray-100 p-3 rounded-lg">🎮 Sarah commented: "Awesome!"</li>
      <li className="bg-gray-100 p-3 rounded-lg">🎨 Chris followed you</li>
    </ul>
  </motion.div>
)}


        {/* Stories Section */}
        <div className="mt-6 flex gap-4 overflow-x-auto overflow-y-hidden">
          <div className="w-20 h-20 flex flex-col items-center cursor-pointer">
            <div className="w-16 h-16 rounded-full border-4 border-gray-300 flex items-center justify-center">
              <Plus size={32} />
            </div>
            <p className="text-xs mt-1">Your Story</p>
          </div>
          {stories.map((story) => (
            <motion.div
              key={story.id}
              className="w-20 h-20 flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={story.img}
                alt={story.name}
                className="w-16 h-16 rounded-full border-4 border-pink-500"
              />
              <p className="text-xs mt-1">{story.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Create Post Section */}
        <div className="p-5 mt-6 flex gap-4 bg-white rounded-xl shadow-md">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <input
            type="text"
            placeholder="Share something interesting..."
            className="flex-1 p-3 rounded-full outline-none border border-gray-300"
          />
          <button className="text-gray-600 hover:text-black">
            <Image size={24} />
          </button>
          <button className="bg-pink-500 px-12 py-2 rounded-full text-white">
            Post
          </button>
        </div>

        {/* Feed Section */}
        <div className="space-y-6 mt-6">
          {posts.map((post) => (
            <div key={post.id} className="p-5 bg-white rounded-xl shadow-md mb-6">
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-3">
                <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold">{post.user}</p>
                  <p className="text-gray-600 text-sm">{post.hobby}</p>
                </div>
              </div>

              {/* Post Content */}
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt="Post" className="mt-3 rounded-lg w-full h-full" />}

              {/* Post Actions */}
              <div className="flex gap-6 mt-4 text-gray-600">
                <button className="flex items-center gap-2 hover:text-red-500">
                  <Heart size={20} /> {post.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-blue-500">
                  <MessageCircle size={20} /> {post.comments}
                </button>
                <button className="flex items-center gap-2 hover:text-green-500">
                  <Send size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar (Trending) */}
      <div className="w-80 p-6 ml-6 rounded-xl bg-white shadow-xl pt-20 fixed top-0 right-0 h-full overflow-y-auto">
  <h3 className="text-2xl font-semibold mb-6 text-pink-600 text-center border-b-2 pb-4">Trending Topics</h3>
  <ul className="space-y-6">
    {trendingTopics.map((topic, index) => (
      <li
        key={index}
        className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all duration-200 ease-in-out border border-transparent hover:border-gray-300"
      >
        <span className="text-sm font-medium text-gray-700">{topic}</span>
        <button className="text-xs text-pink-500 hover:text-pink-700">Explore</button>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default Dashboard;
