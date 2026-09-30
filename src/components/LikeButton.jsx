import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-box">
      <button className="like-btn" onClick={handleLike}>
        👍 Like
      </button>
      <p className="like-count">Total Likes: {likes}</p>
    </div>
  );
}

export default LikeButton;
