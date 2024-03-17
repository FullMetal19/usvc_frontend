import React from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";


export function Account(){

    return (

        <div>

            <Header2 />

            {/* ************************************************************************ */}
            <div className="container pb-5"> 
                <div className="row d-flex justify-content-center my-5">

                    {/* ********************************** LEFT CONTAINER ************************************** */}
                    <div className="col-lg-10 d-flex flex-column">

                        <div className="col-md-12 mb-5 px-2" > 
                            <div className="row d-flex flex-column border bg-white"> 
                                <div className="d-flex justify-content-center align-items-center my-3 " > 
                                    <span className='circle bg-snd-clr' > <img src={'../img/icons8-accueil-128.png'} alt="Logo" width={60} height={60} className="" /> </span>
                                </div>
                                <span className="text-center text-clr h4 mb-2" width="200" height="200" > Prenom et nom </span>
                                <span className="text-center text-clr mb-4 px-4" width="200" height="200" > Tel: 77 000 00 00   </span>
                                <div className="text-center"> <a className="btn btn-white mb-4 px-5" href="/admin"> administrer </a> </div>
                                
                            </div>
                        </div>

                        <div className="col-md-12 px-0" >

                            <div className="row" >
                                <div className="col-lg-12 px-0" >
                                    <div className="p-2 bg-snd-clr border" >
                                        <span className="color-white h4" > Mes logements  </span>
                                    </div>
                                </div>
                                <div className="col-lg-12 border px-4 py-5" >

                                    <div className="row" > 

                                    <div className="col-md-6 mb-5"> 
                                        <div className="d-flex flex-column border" > 
                                            <div className="mb-2" >
                                                <img src={ '../img/stylish.jpg' } alt="Logo" height={200} className="w-100" />
                                            </div>
                                            <div className="d-flex flex-column px-3" >
                                                <span className="text-start text-clr mb-3" > Ipsum is simply dummy Ipsum is simply dummy  is simply dummy </span>
                                                <a className="btn btn-main mb-3" href="/payement"> Payer mensualite </a>
                                                <a className="btn btn-white mb-4" href="historique-payement"> Historique paiements </a>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6" > 
                                        <div className="d-flex flex-column border" > 
                                            <div className="mb-2" >
                                                <img src={ '../img/stylish.jpg' } alt="Logo" height={200} className="w-100" />
                                            </div>
                                            <div className="d-flex flex-column px-3" >
                                                <span className="text-start text-clr mb-3" > Ipsum is simply dummy Ipsum is simply dummy  is simply dummy </span>
                                                <a className="btn btn-main mb-3" href="/payement"> Payer mensualite </a>
                                                <a className="btn btn-white mb-4" href="historique-payement"> Historique paiements </a>  
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                     
                                </div>
                            </div> 
   
                        </div>
                    </div>
                        
                </div>
            </div>
            
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}