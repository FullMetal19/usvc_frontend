import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { HouseContainer, GroundContainer } from "../components/Component";
import { HouseSkeleton, GroundSkeleton } from '../components/SkeletonComponent';


export function Location(){

    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);

    const list = [

        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Studio',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Appartement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },

        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Appartement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'image1' : '../img/terrain.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
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
            <div className="container bg-snd-clr p-4 mt-5 rounded-3 d-flex justify-content-center">
               <div className="h4"> Nos Logements à Saint Louis </div>
            </div>
            {/* ************************************************************************ */}
            <div className="container py-4"> 
                <div className="row my-4 scroller py-2"> 

                     { loading ? (
                        data.map(( item , index ) => {
                            return(
                                <div className="col-md-6 col-lg-4 mb-5"> 
                                    <HouseContainer image={ item.image } price={ item.price } title={ item.title } desc={ item.desc } />
                                </div> 
                            )

                        })
                     ) :( <div className="row"> <HouseSkeleton value={ 6 } design={"col-md-6 col-lg-4 mb-5"} />  </div>  ) 
                     
                    }
                    
                </div>
            </div>

            {/* ************************************************************************ */}
            <div className="container bg-snd-clr p-4 my-4 rounded-3 d-flex justify-content-center">
               <div className="h4"> Nos parcelle de terrains à Saint Louis </div>
            </div>
            
            {/* ************************************************************************ */}
            <div className="container py-5"> 
                <div className="row mb-5 scroller py-2"> 

                     { loading ? (
                        data.map(( item , index ) => {
                            return(
                                <div className="col-md-6 col-lg-4 mb-5"> 
                                    <GroundContainer image={ item.image1 } price={ item.price } title={ item.title } desc={ item.desc } />
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


