import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = ({ post }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
      setAuthor(response.data);
    };

    fetchAuthor();
  }, [post.userId]);

  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {author && <p>Author: {author.name}</p>}
    </div>
  );
};

export default Post;
