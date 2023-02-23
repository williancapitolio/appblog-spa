import { useEffect, useState } from "react";
import { api } from "../services/Api";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../components/Menu"


export const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();

    const postId = location.pathname.split("/")[2];

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
                        <p>Postado há </p>
                    </div>
                    <div className="edit">
                        <Link className="link" to={`/write?edit=2`}>
                            <AiOutlineEdit className="action" size={25} />
                        </Link>
                        <Link className="link" to={`/write/delete`}>
                            <AiOutlineDelete className="action" size={25} />
                        </Link>
                    </div>
                </div>
                <h1>Título 1</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique beatae harum explicabo libero et delectus commodi nisi repudiandae corrupti autem fugiat placeat nulla ea facere, aspernatur perferendis itaque dolore inventore quidem reprehenderit qui tempore porro modi. Laudantium ducimus illo itaque beatae, quas laboriosam deserunt modi sit cumque perferendis aliquam commodi sequi natus eum eos? Totam repudiandae illum molestias dignissimos. Cum eveniet harum dolorum exercitationem perspiciatis placeat officiis explicabo beatae animi repudiandae, qui quod sed ipsa! Magnam error qui quis debitis quaerat possimus ea tempora enim neque ab sint quasi culpa dignissimos optio illo esse, harum obcaecati praesentium fugiat illum dolorum accusamus. Ipsa aspernatur sapiente quidem odit at natus quaerat dolorem optio voluptates? Quis ea minima cum quod ipsa quo, voluptas eaque accusamus officiis voluptatum modi possimus magnam libero rerum consectetur ut reiciendis molestias dolorum blanditiis vitae. Voluptatum, illum asperiores itaque officiis aperiam nam ducimus eius ratione voluptas, laboriosam id neque aspernatur, ullam voluptatem quod maxime alias consequuntur temporibus explicabo praesentium nemo soluta amet assumenda animi. Cumque porro, ullam aspernatur est sed debitis natus! Placeat perferendis nostrum debitis amet velit modi obcaecati rerum blanditiis. Dolorem vero fugiat tempora necessitatibus architecto, accusamus aliquam in distinctio possimus soluta, voluptatem optio autem nostrum labore aspernatur ratione illo expedita consequuntur eos recusandae laboriosam id. Dicta velit debitis ratione, animi error harum culpa sed repudiandae magnam! Unde, nam tenetur accusantium id enim doloremque incidunt blanditiis, animi distinctio dolor deserunt nisi sint dicta iste libero praesentium. Delectus quia sit optio doloribus explicabo repellat fugit sint aperiam.</p>
            </div>
            <Menu />
        </div>
    );
};
