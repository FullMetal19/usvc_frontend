import React from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";


export function Payement(){

    return (

        <div>

            <Header2 />

            {/* ************************************************************************ */}
            <div className="container pb-5"> 
                <div className="row d-flex justify-content-center my-5">

                    <div className="col-md-12 mb-5 border p-5" > 
                        <div className=" d-flex flex-column border-left-main ps-2 ms-1" > 
                            <span className="fs-lg bold text-clr"> Formulaire de paiement </span>
                            <span className="text-clr"> Lorem Ipsum is simply dummy text of the and typesetting </span>
                            <span className="text-clr"> Montant : 100 000 Fcfa </span>
                        </div> 
                    </div> 
                        
                </div>
            </div>
            
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}