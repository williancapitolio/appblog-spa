import { useContext, useEffect, useState } from "react";
import { api } from "../services/Api";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Menu } from "../components/Menu"
import moment from "moment/moment";
import "moment/locale/pt-br";

export const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();

    const postId = location.pathname.split("/")[2];

    const navigate = useNavigate();

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

    const handleDelete = async () => {
        try {
            await api.delete(`/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.log(err);
        };
    };

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    return (
        <div className="single">
            <div className="content">
                <img src={`/uploads/${post?.img}`} alt="Imagem do post." />
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="Imagem do autor." />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Postado há {moment(post.date).locale("pt-br").fromNow(true)}</p>
                    </div>
                    {currentUser.username === post.username && <div className="edit">
                        <Link className="link" to={`/write?edit=2`} state={post}>
                            <AiOutlineEdit className="action" size={25} />
                        </Link>
                        <AiOutlineDelete className="action" size={25} onClick={handleDelete} />
                    </div>}
                </div>
                <h1>{post.title}</h1>
                <p>{getText(post.desc)}</p>
            </div>
            <Menu cat={post.cat} />
        </div>
    );
};
