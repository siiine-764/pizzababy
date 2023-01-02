import React, { useState, useEffect } from 'react';
import './Testcompenent.css'
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Testcompenent: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts'
      );

      setPosts(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <h2>Item 1</h2>
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                    <p>{post.id}</p>
                    <button className="add-to-cart" type="button">Add to cart</button>
                </div>
            </div>
        </div>
      ))}
    </ul>
  );
};

export default Testcompenent;
