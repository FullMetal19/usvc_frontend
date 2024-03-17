import React, { useEffect, useState } from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { HouseForm1, HouseForm2, HouseForm3 } from "../components/FormComponent";

export function AddProperty(){

    const [ state , setState ] = useState(1);

    const stateHandler = ( arg ) => { setState(arg) }

    return (

        <div>

            <Header2 />
            
            {/* ************************************************************************ */}   
            <div className="container-fluid bg-three-clr py-5 px-4 d-flex justify-content-center mb-5"> 
               <span className="h3 text-center"> Ajouter un logement </span>
            </div>

            {/* ************************************************************************ */} 
            <div className="container"> 
               <div className="row d-flex justify-content-center"> 
                    <div className="col-md-9"> {
                        (state === 1) ? (

                        <HouseForm1 method={ stateHandler } />

                        ) :
                        (state === 2) ? (

                        <HouseForm2 method={ stateHandler } />

                        ) : (
                        
                        <HouseForm3 method={ stateHandler } />
                        
                        ) 
                    }     
                    </div>
                </div>
            </div>
            
            {/* ************************************************************************ */}
            <Footer />
        </div>
    )
}