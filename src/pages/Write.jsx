import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Write = () => {
    const [value, setValue] = useState("");

    return (
        <div className="add">
            <div className="content">
                <input type="text" placeholder="Título" />
                <div className="editorContainer">
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
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
                    <input style={{ display: "none" }} type="file" id="file" name="file" />
                    <label htmlFor="file">Selecionar imagem</label>
                    <div className="buttons">
                        <button>Salvar rascunho</button>
                        <button>Atualizar</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Categoria</h1>
                    <input type="radio" name="cat" value="art" id="art" />
                    <label htmlFor="art">Arte</label>
                    <input type="radio" name="cat" value="science" id="science" />
                    <label htmlFor="science">Ciência</label>
                    <input type="radio" name="cat" value="technology" id="technology" />
                    <label htmlFor="technology">Tecnologia</label>
                    <input type="radio" name="cat" value="cinema" id="cinema" />
                    <label htmlFor="cinema">Cinema</label>
                    <input type="radio" name="cat" value="design" id="design" />
                    <label htmlFor="design">Design</label>
                    <input type="radio" name="cat" value="food" id="food" />
                    <label htmlFor="food">Alimentação</label>
                </div>
            </div>
        </div>
    );
};
