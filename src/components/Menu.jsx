export const Menu = () => {
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
        <div className="menu">
            <h1>Outros posts que você pode gostar</h1>
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="Imagem do post." />
                    <h2>{post.title}</h2>
                    <button>Leia mais</button>
                </div>
            ))}
        </div>
    );
};
