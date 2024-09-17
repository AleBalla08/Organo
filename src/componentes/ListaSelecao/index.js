import "./ListaSelecao.css"

const ListaSelecao = (props) => {
    return (
        <div className="selecao">
            <label>{props.label}</label>
            <select required={props.obrigatorio} > 
                 {props.itens.map(item => { 
                        return <option key={item}>{item}</option>
                        })}
            </select>
        </div>

    )

    
}

export default ListaSelecao