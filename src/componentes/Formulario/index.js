import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSelecao from '../ListaSelecao'
import Botao from '../Botao'
import SelecaoArquivo from '../SelecaoArquivo'


const Formulario = () => {
    
    const times = [
        'Selecione sua equipe',
        'Faze',
        'Loud',
        'The Boys',
        'Furia',
        'Liquid'
]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('submetido')
}

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para cadastrar um integrante</h2>
                <CampoTexto obrigatorio={true}  label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true}  label="Área" placeholder="Digite sua área de atuação" />
                <SelecaoArquivo label="Foto"/>
                <ListaSelecao obrigatorio={true}  label="Equipes" itens={times}/>
                <Botao>
                    Cadastrar
                </Botao>
                
            </form>
        </section>
    )


}


export default Formulario