import { useEffect, useState } from "react";
import { api } from "../services/Api";

export const Menu = ({ cat }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [cat]);

    return (
        <div className="menu">
            <h1>Outros posts que você pode gostar</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={`/uploads/${post.img}`} alt="Imagem do post." />
                    <h2>{post.title}</h2>
                    <button>Leia mais</button>
                </div>
            ))}
        </div>
    );
};
