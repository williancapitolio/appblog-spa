import { useContext, useEffect, useState } from "react";
import { api } from "../services/Api";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Menu } from "../components/Menu"
import moment from "moment/moment";
import "moment/locale/pt-br";

export const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();

    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get(`/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            };
        };
        fetchData();
    }, [postId]);

    return (
        <div className="single">
            <div className="content">
                <img src={post?.img} alt="Imagem do post." />
                <div className="user">
                    <img src="https://avatars.githubusercontent.com/u/70084163?s=96&v=4" alt="Imagem do autor." />
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Postado há {moment(post.date).locale("pt-br").fromNow(true)}</p>
                    </div>
                    {currentUser.username === post.username && <div className="edit">
                        <Link className="link" to={`/write?edit=2`}>
                            <AiOutlineEdit className="action" size={25} />
                        </Link>
                        <Link className="link" to={`/write/delete`}>
                            <AiOutlineDelete className="action" size={25} />
                        </Link>
                    </div>}
                </div>
                <h1>{post.title}</h1>
                <p>{post.desc}</p>
            </div>
            <Menu />
        </div>
    );
};
