import React from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";

export function Login(){

    return (

        <div>

            <Header2 />
            {/* ************************************************************************ */}   
            <div className="container-fluid bg-three-clr py-5 px-4 d-flex justify-content-center"> 
               <span className="h3 text-center"> Connexion </span>
            </div>
            {/* ************************************************************************ */}
            <div className="container py-5" >
                <div className="row py-5 d-flex justify-content-between" > 
                    
                    <div className="col-md-5 mb-5" > 
                        <div className=" d-flex flex-column border-left-main ps-2 ms-1 mb-5" > 
                            <span className="fs-lg bold text-clr"> Lorem Ipsum is simply dummy </span>
                            <span className="text-clr"> Lorem ipsum is simply dummy text of the and typesetting ipsum is simply dummy text of the and typesetting </span>
                        </div>
                        <input type="text" name="" className="form-control form-control-lg mb-3" placeholder="nom utilisateur" required />
                        <input type="password" name="" className="form-control form-control-lg mb-3" placeholder="mot de passe" required />
                        <div className="col-md-12 mb-4" > 
                            <button type="submit" className="btn btn-lg btn-main "> Envoyez </button> 
                        </div>
                        <a href="" className="link link-outline"> Mot de passe oublié ? </a>
                    </div> 

                    <div className="col-md-4 my-4" > 
                        <div className=" d-flex flex-column align-items-center" >
                            <img src={'../img/icons8-accueil-128.png'} alt="Logo" width={80} height={80} className="mb-4" /> 
                            <span className="text-center fs-lg bold text-clr mb-3"> Lorem Ipsum is simply dummy </span>
                            <span className="text-center text-clr mb-4"> Lorem ipsum is simply dummy text of the and typesetting ipsum is simply dummy text of the and typesetting </span>
                            <div className="col-md-12 mb-4 text-center" > 
                                <a href="/inscription" className="btn btn-white btn-lg"> S'inscrire </a>
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


