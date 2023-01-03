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
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <ul>
                        {posts.map(post => (
                        <div>
                            <h2>Item 1</h2>
                            <p>{post.title}</p>
                       </div>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Testcompenent;
