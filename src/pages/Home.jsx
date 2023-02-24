import { useEffect, useState } from "react";
import { api } from "../services/Api";
import { Link, useLocation } from "react-router-dom";

export const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [cat]);

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`/uploads/${post.img}`} alt="Imagem do post." />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>
                                <Link className="link" to={`/post/${post.id}`}>
                                    Leia mais
                                </Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
