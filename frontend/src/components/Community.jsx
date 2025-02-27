import React, { useState } from "react";
import "../assets/styles/community.css";

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Rahul", content: "Drinking enough water daily keeps your skin healthy!", likes: 12, comments: [] },
    { id: 2, user: "Sneha", content: "Morning yoga can help reduce stress and anxiety.", likes: 8, comments: [] }
  ]);
  const [newPost, setNewPost] = useState("");
  const [activeTab, setActiveTab] = useState("community");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Add health tips data
  const healthTips = [
    { id: 1, tip: "Eating a balanced diet rich in fiber helps digestion and keeps you fit! 🍏" },
    { id: 2, tip: "Aim for 7-9 hours of quality sleep each night for better health 😴" },
    { id: 3, tip: "Take regular breaks while working to reduce eye strain 👀" }
  ];

  // Add expert advice section data
  const expertAdvice = [
    {
      id: 1,
      expert: "Dr. Sarah Johnson",
      specialty: "Nutritionist",
      advice: "Include protein in every meal to maintain muscle health and feel fuller longer."
    },
    {
      id: 2,
      expert: "Dr. Mike Chen",
      specialty: "Physical Therapist",
      advice: "Regular stretching can prevent muscle stiffness and improve flexibility."
    }
  ];

  const addPost = () => {
    if (!newPost.trim()) return;
    setPosts([{ id: Date.now(), user: "You", content: newPost, likes: 0, comments: [] }, ...posts]);
    setNewPost("");
  };

  return (
    <div className="community-container">
      <h2>Community & Health Forum</h2>

      {/* Navigation Tabs */}
      <div className="community-tabs">
        <button 
          className={`tab ${activeTab === "community" ? "active" : ""}`}
          onClick={() => setActiveTab("community")}
        >
          Community Feed
        </button>
        <button 
          className={`tab ${activeTab === "experts" ? "active" : ""}`}
          onClick={() => setActiveTab("experts")}
        >
          Expert Advice
        </button>
      </div>

      {activeTab === "community" ? (
        <>
          {/* Category Filter */}
          <div className="category-filter">
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="all">All Posts</option>
              <option value="nutrition">Nutrition</option>
              <option value="fitness">Fitness</option>
              <option value="mental-health">Mental Health</option>
            </select>
          </div>

          {/* Health Tips Carousel */}
          <div className="health-tips-carousel">
            {healthTips.map((tip) => (
              <div key={tip.id} className="health-tip">
                <h3>🌿 Daily Health Tip</h3>
                <p>{tip.tip}</p>
              </div>
            ))}
          </div>

          {/* Post Creation */}
          <div className="post-box">
            <textarea
              placeholder="Share your thoughts or ask a health-related question..."
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
            />
            <button onClick={addPost}>Post</button>
          </div>

          {/* Display Posts */}
          <div className="posts">
            {posts.map((post) => (
              <div key={post.id} className="post">
                <div className="post-header">
                  <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.user}`} alt="avatar" className="avatar" />
                  <h4>{post.user}</h4>
                </div>
                <p>{post.content}</p>
                <div className="post-actions">
                  <button className="action-btn">❤️ {post.likes} Likes</button>
                  <button className="action-btn">💬 Comment</button>
                  <button className="action-btn">📤 Share</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Expert Advice Section */
        <div className="expert-advice-section">
          {expertAdvice.map((advice) => (
            <div key={advice.id} className="expert-card">
              <div className="expert-header">
                <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${advice.expert}`} alt="expert avatar" className="avatar" />
                <div>
                  <h4>{advice.expert}</h4>
                  <p className="specialty">{advice.specialty}</p>
                </div>
              </div>
              <p className="advice-content">{advice.advice}</p>
              <button className="consult-btn">Schedule Consultation</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
