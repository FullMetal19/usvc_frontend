import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { GroundContainer, SectionTitle, SubTitle } from "../components/Component";
import { GroundList } from "../components/ListComponent";
import { GroundSkeleton } from '../components/SkeletonComponent';


export function Ground(){

    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);

    const list = [

        {
            'title' : 'Parcelle de terrain',
            'image' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Parcelle de terrain',
            'image' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Parcelle de terrain',
            'image' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Parcelle de terrain',
            'image' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Parcelle de terrain',
            'image' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },

        {
            'title' : 'Parcelle de terrain',
            'image' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        }
        
        
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
            <div className="container-fluid bg-three-clr">
                <GroundList /> 
            </div>
            {/* ************************************************************************ */}
            <div className="container py-5"> 
                <SectionTitle text={'our products'} />
                <SubTitle />
                <div className="row mt-4"> 

                     { loading ? (
                        data.map(( item , index ) => {
                            return(
                                <div className="col-md-6 col-lg-4 mb-5"> 
                                    <GroundContainer image={ item.image } price={ item.price } title={ item.title } desc={ item.desc } id={ index } />
                                </div> 
                            )

                        })
                     ) : (  <div className="row"> <GroundSkeleton value={ 6 } design={"col-md-6 col-lg-4 mb-5"} />  </div>  )
                     
                    }
                    
                </div> 
            </div> 
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}


