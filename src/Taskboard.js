import React, { Component } from 'react'
import Estoria from './Estoria'
import EstoriaForm from './EstoriaForm'

class Taskboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estorias: [
                { id: 1, titulo: "Contratar Seguro", descricao: "Desc 1", pontos: 10 },
                { id: 2, titulo: "Cancelar Seguro", descricao: "Desc 2", pontos: 20 },
                { id: 3, titulo: "Renovar Seguro", descricao: "Desc 3", pontos: 15 },
                { id: 4, titulo: "Pagar Seguro", descricao: "Desc 4", pontos: 5 }
            ]
        }
    }


    _listEstorias() {

        return this.state.estorias.map(estoria => <Estoria titulo={estoria.titulo}
            descricao={estoria.descricao}
            pontos={estoria.pontos}
            key={estoria.id} />)
    }

    addEstoria(titulo, pontos, descricao) {
        //alert(`${titulo} -  ${pontos} - ${descricao}`)

        const estoria = { titulo, pontos, descricao, id: this.state.estorias.lenght + 1 }

        this.setState({ estorias: this.state.estorias.concat([estoria]) })

    }

    render() {
        let estorias = this._listEstorias()

        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <h1 className="header center orange-text">Estórias</h1>
                    <h3>{estorias.length} Estórias</h3>
                    {estorias}
                    <EstoriaForm addEstoria={this.addEstoria.bind(this)} />

                </div>
            </div>
        )
    }
}

export default Taskboard