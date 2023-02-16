import { Link } from "react-router-dom";

export const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Título 1",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam sed elit placerat blandit. Phasellus convallis dolor nisl, nec molestie enim blandit non. Donec luctus semper cursus. Fusce nec tortor lobortis, rutrum libero sit amet, hendrerit felis. Mauris consequat ut ipsum a dignissim. Aliquam eget augue tellus. Aliquam at viverra dolor.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ah0CnwyoNAliZ6Aoa8GAH1HTLHilwh07Sg&usqp=CAU"
        },
        {
            id: 2,
            title: "Título 2",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam sed elit placerat blandit. Phasellus convallis dolor nisl, nec molestie enim blandit non. Donec luctus semper cursus. Fusce nec tortor lobortis, rutrum libero sit amet, hendrerit felis. Mauris consequat ut ipsum a dignissim. Aliquam eget augue tellus. Aliquam at viverra dolor.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LSID7OsLuwVx7w0MaFiksKeIXPZTLqic_w&usqp=CAU"
        },
        {
            id: 3,
            title: "Título 3",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam sed elit placerat blandit. Phasellus convallis dolor nisl, nec molestie enim blandit non. Donec luctus semper cursus. Fusce nec tortor lobortis, rutrum libero sit amet, hendrerit felis. Mauris consequat ut ipsum a dignissim. Aliquam eget augue tellus. Aliquam at viverra dolor.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxzJdPcuXQuLbS2KW6yJlPwHcJFovSIK17Q&usqp=CAU"
        },
        {
            id: 4,
            title: "Título 4",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam sed elit placerat blandit. Phasellus convallis dolor nisl, nec molestie enim blandit non. Donec luctus semper cursus. Fusce nec tortor lobortis, rutrum libero sit amet, hendrerit felis. Mauris consequat ut ipsum a dignissim. Aliquam eget augue tellus. Aliquam at viverra dolor.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Ah0CnwyoNAliZ6Aoa8GAH1HTLHilwh07Sg&usqp=CAU"
        },
        {
            id: 5,
            title: "Título 5",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam sed elit placerat blandit. Phasellus convallis dolor nisl, nec molestie enim blandit non. Donec luctus semper cursus. Fusce nec tortor lobortis, rutrum libero sit amet, hendrerit felis. Mauris consequat ut ipsum a dignissim. Aliquam eget augue tellus. Aliquam at viverra dolor.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LSID7OsLuwVx7w0MaFiksKeIXPZTLqic_w&usqp=CAU"
        },
        {
            id: 6,
            title: "Título 6",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non quam sed elit placerat blandit. Phasellus convallis dolor nisl, nec molestie enim blandit non. Donec luctus semper cursus. Fusce nec tortor lobortis, rutrum libero sit amet, hendrerit felis. Mauris consequat ut ipsum a dignissim. Aliquam eget augue tellus. Aliquam at viverra dolor.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxzJdPcuXQuLbS2KW6yJlPwHcJFovSIK17Q&usqp=CAU"
        }
    ];

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
