import "./SelecaoArquivo.css"

const SelecaoArquivo = (props) => {
    return (
        <div className="selecao-arquivo">
        <label>
            {props.label}
        </label>
        <input type='file'/>
    </div>
    )
}

export default SelecaoArquivo