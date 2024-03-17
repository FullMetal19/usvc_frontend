import React, { useEffect, useState } from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { SectionTitle } from "../components/Component";
import { VideoModal } from "../components/ModalComponent";
import { SubTitle } from "../components/Component";
import { ServiceContainer } from "../components/Component";
import { ServiceSkeleton } from '../components/SkeletonComponent';
import { LocationList } from "../components/ListComponent"; 


export function Service(){

    const [ loading , setLoading ] = useState(false);
    const [ modalState , setModalState ] = useState(false);
    const [ data , setData ] = useState([]);

    const closeModal = ( arg ) => {  setModalState( arg ) }


    const list = [

        {
            'title' : 'This is the service\'s title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },

        {
            'title' : 'This is the service\'s title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },

        {
            'title' : 'This is the service\'s title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },
        {
            'title' : 'This is the service\'s title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },

        {
            'title' : 'This is the service\'s title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },

        {
            'title' : 'This is the service\'s title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
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

            { modalState ? ( <VideoModal method={ closeModal } /> ) : null}
            
            {/* ************************************************************************ */}
            <Header2 />
 
            {/* ************************************************************************ */}
            <div className="container py-5"> 
                <div className="row d-flex justify-content-between mt-5">
                    <div className="col-md-5 border p-2">
                        <img src={'../img/Intersection-3.png'} alt="Logo" className="img-fluid" /> 
                    </div>  
                    <div className="col-md-6"> 
                        <div className="d-flex flex-column">
                            <div className="my-5" > <span className='py-3 px-5 bg-snd-clr main-color rounded-5' > Service's title </span> </div> 
                            <span className='display-5 bold mb-4' > This is the title of this saction </span>
                            <span className='text-clr mb-5' > this is the location description Lorem Ipsum is simply dummy text of the industrythis this is the location description Lorem Ipsum is simply dummy text of the industrythis is the location description Lorem Ipsum is simply dummy text of the industry this is the location description Lorem Ipsum is simply dummy text of the industrythis is the location description Lorem Ipsum is simply dummy text of the industry </span>
                            <div className="row">
                                <div className="col-lg-6 d-flex align-items-center mb-4">
                                   <span className='rounded-circle d-flex bg-snd-clr p-3' > <img src={ '../img/icons8-accueil-128.png' } alt="Logo" width={30} height={30} className="" /> </span>
                                   <span className='text-clr ms-2' > This is the title </span>
                                </div> 
                                <div className="col-lg-6 d-flex align-items-center mb-4">
                                   <span className='rounded-circle d-flex bg-snd-clr p-3' > <img src={ '../img/icons8-accueil-128.png' } alt="Logo" width={30} height={30} className="" /> </span>
                                   <span className='text-clr ms-2' > This is the title </span>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center mb-4">
                                   <span className='rounded-circle d-flex bg-snd-clr p-3' > <img src={ '../img/icons8-accueil-128.png' } alt="Logo" width={30} height={30} className="" /> </span>
                                   <span className='text-clr ms-2' > This is the title </span>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center mb-4">
                                   <span className='rounded-circle d-flex bg-snd-clr p-3' > <img src={ '../img/icons8-accueil-128.png' } alt="Logo" width={30} height={30} className="" /> </span>
                                   <span className='text-clr ms-2' > This is the title </span>
                                </div>
                            </div> 
                            <span className='p-4 bg-snd-clr my-4 border-left-main' > this is the location description Lorem Ipsum is simply dummy text of the industrythis this is the location description Lorem Ipsum is simply dummy text of the industrythis is the location description </span>     
                            <div> 
                                <button className="d-flex mt-2 btn btn align-items-center py-2 px-4 bg-main" onClick={ ()=>{ setModalState(true) } }>
                                    <img src={'../img/icons8-film-64.png'} alt="Logo" width={30} height={30} className="me-1" />
                                    <span className="color-white" > lire video </span>
                                </button> 
                            </div> 
                        </div>
                    
                    </div> 
                </div> 
            </div> 
            {/* ************************************************************************ */}
            <div className="container-fluid bg-three-clr py-5 my-5">
                <div className="container py-5"> 
                    <SectionTitle text={'This is our services '} />
                    <div className="row mt-5"> 
                        { loading ? (

                        data.map( (item , index) => {

                        return (

                            <ServiceContainer title={ item.title } desc={ item.desc } />
  
                            )
                        }) 
                    ) : ( <div className="row"> <ServiceSkeleton value={ 6 } /> </div> ) 
                    }  
  
                    </div> 
                </div> 
            </div>
            {/* ************************************************************************ */}
            <div className="pb-5"> <LocationList /> </div>
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}


