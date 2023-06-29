import React, { useState } from 'react';
import './App.css'
const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    } else {
      alert('Please enter a comment');
    }
  };

  return (
    <div >
       
        
      <ul id="comment-list">
        {comments.map((comment, index) => (
          <li key={index} className="comment">{comment}</li>
        ))}
      </ul>
      <form>
        <input type="text" id="comment" value={newComment} onChange={handleInputChange} className="comment-input" />
        <input type="button" id="postComment" value="Post" onClick={handlePostComment} className="post-button" />
      </form>
    </div>
  );
};

export default CommentList;
