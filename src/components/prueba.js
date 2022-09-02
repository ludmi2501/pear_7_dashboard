//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React, {Component} from 'react';
import NftList from './NftList';

import PruebaNft from './pruebaNft'
//Importar nuestro componente

class NftPrueba extends Component{
    constructor(){
        super()
        this.state ={
            nft : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/nft')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(nft =>{
            console.log(nft.counts)
            this.setState({nft: nft.counts})
        })
        .catch(error => console.log(error))

    }


    render(){
        return (
            <React.Fragment>
            {/*<!-- MOVIES LIST -->*/}
            <h1 className="h3 mb-2 text-gray-800 ">Nft in Data Base</h1>
            
            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <tbody>
                                {
                                    //console.log(this.state.movies)
                                    this.state.nft.length((product,index)=>{
                                        return <PruebaNft  {...product} key={index}  />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>


    
    </React.Fragment>
    )
    }
}
export default NftPrueba;
