import React from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";

export function Signup(){

    return (

        <div>

            <Header2 />
            {/* ************************************************************************ */}   
            <div className="container-fluid bg-three-clr py-5 px-4"> 
               <div className="py-4"> </div>
            </div>
            {/* ************************************************************************ */}
            <div className="container" >
                <div className="row py-5 d-flex justify-content-center" > 
                    
                    <div className="col-12 mb-4" >
                        <div className="d-flex flex-column align-items-center ps-2 ms-1" > 
                            <span className="circle bg-snd-clr"> <img src={'../img/icons8-accueil-128.png'} alt="Logo" width={60} height={60} className="mb-2" /> </span>
                            <span className="fs-lg bold text-clr"> Lorem simply dummy </span>
                        </div>
                    </div> 
                    <div className="col-8 mb-5 border p-5" >
                        <div className="row" >

                            <div className="col-md-12 mb-5" > 
                                <div className="d-flex flex-column border-left-main ps-2 ms-1" > 
                                    <span className="fs-lg bold main-color"> Lorem Ipsum is simply dummy </span>
                                    <span className="text-clr"> Lorem ipsum is simply dummy text of the and typesetting ipsum is simply dummy text of the and typesetting </span>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-2" >
                                <input type="text" name="" className="form-control form-control-lg mb-3" placeholder="prénom" required />
                            </div>
                            <div className="col-lg-6 mb-2" >
                                <input type="text" name="" className="form-control form-control-lg mb-3" placeholder="nom" required />
                            </div>

                            <div className="col-lg-6 mb-2" >
                                <input type="text" name="" className="form-control form-control-lg mb-3" placeholder="numéro de tel" />
                            </div>
                            <div className="col-lg-6 mb-2" >
                                <input type="text" name="" className="form-control form-control-lg mb-3" placeholder="email" />
                            </div>

                            <div className="col-lg-6 mb-4" >
                                <input type="text" name="" className="form-control form-control-lg mb-3" placeholder="mot de passe" required />
                            </div>
                            <div className="col-lg-6 mb-4" >
                                <input type="text" name="" className="form-control form-control-lg mb-3" placeholder="confirmer mot de passe" required />
                            </div>

                            <div className="col-md-12 mb-4" > 
                                <button type="submit" className="btn btn-lg btn-main "> S'inscrire </button> 
                            </div>

                        </div>
                    </div>

                    <div className="col-12 my-5" >
                        <div className=" d-flex flex-column border-left-main ps-2 ms-1 mb-5" > 
                            <span className="fs-lg bold text-clr"> Lorem Ipsum is simply dummy </span>
                            <span className="text-clr"> Lorem ipsum is simply dummy text of the and typesetting ipsum is simply dummy text of the and typesetting </span>
                        </div>
                    </div>

                </div> 
            </div>
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}


