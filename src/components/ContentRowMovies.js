import React, {Component} from 'react';
import SmallCard from './SmallCard';


class ContentRowMovies extends Component{
    

    constructor(){
        super()
        this.state ={
            nft : [],
            cat : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('http://pearnft.shop/api/nft')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(nft =>{
            /* console.log(nft) */
            this.setState({nft: nft.count})
            this.setState({cat: nft.CategoryCount})            
                
        })
        .catch(error => {console.log(error)})

        fetch('http://pearnft.shop/api/user')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(user =>{
           /*  console.log(user.meta.total) */
            this.setState({user: user.meta.total})
                     
                
        })
        .catch(error => {console.log(error)})

    }

    

    render(){
       /*  console.log(this.state.nft); */

        let productInDataBase = {
            color:   "primary",
            titulo: "NFT in Data Base",
            valor: this.state.nft,
            icono: "fas fa-photo-video",
            }
        
            let amount ={
            color:   "success",
            titulo: "Category in Data BASE",
            valor: this.state.cat,
            icono: "fas fa-award",
            }
        
            let user = {
            color:   "warning",
            titulo: "USER in DATA BASE",
            valor: this.state.user,
            icono: "fas fa-user",
            }
        let cardProps = [productInDataBase,amount,user];
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">

            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
        }
}
export default ContentRowMovies;