import { useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../services/Api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import moment from "moment/moment";
import "moment/locale/pt-br";

export const Write = () => {
    const state = useLocation().state;
    const [title, setTitle] = useState(state?.title || "");
    const [desc, setDesc] = useState(state?.desc || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");
    const date = moment().locale("pt-br").format("YYYY-MM-DD HH:mm:ss");

    const uploadImg = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const res = await api.post("/upload", formData);
            return res.data;
        } catch (err) {
            console.log(err);
        };
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const imgUrl = await uploadImg();
        try {
            state ? await api.patch(`/posts/${state.id}`, {
                title, desc, img: file ? imgUrl : "", cat 
            }) : await api.post("/posts", {
                title, desc, img: file ? imgUrl : "", cat , date
            });
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} required/>
                <div className="editorContainer">
                    <ReactQuill className="editor" theme="snow" value={desc} onChange={setDesc} />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publicação</h1>
                    <span>
                        <b>Status: </b> Rascunho
                    </span>
                    <span>
                        <b>Visibilidade: </b> Público
                    </span>
                    <input style={{ display: "none" }} type="file" id="file" name="file" onChange={e => setFile(e.target.files[0])} />
                    <label className="file" htmlFor="file">Selecionar imagem</label>
                    <div className="buttons">
                        <button>Salvar como rascunho</button>
                        <button onClick={handleSubmit}>Postar</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Categoria</h1>
                    <div className="cat">
                        <input type="radio" checked={cat === "art"} name="cat" value="art" id="art" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="art">Arte</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "science"} name="cat" value="science" id="science" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="science">Ciência</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "technology"} name="cat" value="technology" id="technology" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="technology">Tecnologia</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "cinema"} name="cat" value="cinema" id="cinema" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "design"} name="cat" value="design" id="design" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input type="radio" checked={cat === "food"} name="cat" value="food" id="food" onChange={e => setCat(e.target.value)} />
                        <label htmlFor="food">Alimentação</label>
                    </div>
                </div>
            </div>
        </div>
    );
};
