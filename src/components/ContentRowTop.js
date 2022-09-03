import React, {Component} from 'react';
import GenresInDb from './CategoryInDb';
import ContentRowMovies from './ContentRowMovies';

class ContentRowTop extends Component{

	constructor(){
        super()
        this.state ={
            nft : []
        }
    }
    //Compomentes Ciclo de vida - Montar - Actualizar - Desmontar
    //Montaje
    componentDidMount(){
        fetch('/api/nft/last')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(nftLast =>{
           /*  console.log(nftLast.data[0].description)
			console.log(nftLast.data[0].image) */
            this.setState({image: nftLast.data[0].image})
            this.setState({description: nftLast.data[0].description})            
                
        })
        .catch(error => {console.log(error)})

       

    }

	render(){

		let imagenFondo2
		let imagen2 = "/img/images/" + this.state.image
		let description3 = "NFT Description: " + this.state.description

		let description2

		if(this.state.image === ""){
			imagenFondo2 = <h3>Cargando......</h3>
		} else {
			imagenFondo2 = <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagen2} alt=" Star Wars - Mandalorian "/>
		}
		

		if (this.state.description === ""){
			description2 = <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
		} else {
			description2 = <p> {description3} </p>
		}

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowMovies />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Last NFT in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										{/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/> */}
										{imagenFondo2}
									</div>
									{/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p> */}
									{description2}
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )
	}

}
export default ContentRowTop;