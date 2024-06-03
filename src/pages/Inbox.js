// src/pages/Inbox.js
import React from 'react';

const Inbox = ({ comments }) => {
  return (
    <div>
      <h2>Inbox</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}</strong>: {comment.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inbox;
