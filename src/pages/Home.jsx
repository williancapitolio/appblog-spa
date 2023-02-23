import { useEffect, useState } from "react";
import { api } from "../services/Api";
import { Link, useLocation } from "react-router-dom";

export const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/posts");
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, []);

    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="Imagem do post." />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Leia mais</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
