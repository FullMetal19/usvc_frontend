import React, { useEffect, useState } from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { ContactContainer } from "../components/Component";
import { ContactSkeleton } from '../components/SkeletonComponent';


export function Contact(){

    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);

    const list = [
        {
            'image' : '../img/icons8-nouveau-message-90.png',
            'tel1' : '+221 77 000 00 00',
            'tel2' : '+221 33 000 00 00 '
        },
        {
            'image' : '../img/icons8-nouveau-message-90.png',
            'tel1' : '+221 77 000 00 00',
            'tel2' : '+221 33 000 00 00 '
        },
        {
            'image' : '../img/icons8-nouveau-message-90.png',
            'tel1' : '+221 77 000 00 00',
            'tel2' : '+221 33 000 00 00 '
        },
        
        
    ];

    useEffect(() => {

        setTimeout(() => {

            setData( list ); 
            setLoading(true); 
            
        }, 10000);

    
      }, []);

    return (

        <div>

            <Header2 />
            {/* ************************************************************************ */}   
            <div className="container-fluid bg-three-clr py-5 px-4 d-flex justify-content-center"> 
               <span className="h3 text-center"> Nos contact </span>
            </div>
            {/* ************************************************************************ */}
            <div className="container" >
   
                <div className="row py-5" > 

                { loading ? (
                        data.map(( item , index ) => {

                            return(

                                <ContactContainer image={ item.image } tel1={ item.tel1 } tel2={ item.tel2 } />
                            )

                        })
                     ) : (  <div className="row"> <ContactSkeleton value={ 3 } />  </div>
                         )  
                    }
                </div> 
            </div>
            {/* ************************************************************************ */}
            <div className="container py-5" >
                <div className="row p-5 border mb-5" > 

                    <div className="col-md-12 mb-5" > 
                        <div className=" d-flex flex-column border-left-main ps-2 ms-1" > 
                            <span className="fs-lg bold text-clr"> Lorem Ipsum is simply dummy </span>
                            <span className="text-clr"> Lorem Ipsum is simply dummy text of the and typesetting </span>
                        </div> 
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre mail" required />
                    </div>
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Numéro de téléphone " required />
                    </div>
                    <div className="col-md-12 mb-4" > 
                        <textarea className="form-control" rows={6} placeholder="Entrer votre message"> Entrer votre message </textarea>
                    </div>
                    <div className="col-md-12 mb-4" > 
                        <button type="submit" className="btn btn-lg btn-main "> Envoyez </button> 
                    </div>

                </div> 
            </div>
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}


