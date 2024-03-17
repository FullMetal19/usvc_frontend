import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { HouseContainer, SectionTitle, SubTitle } from "../components/Component";
import { HouseList } from "../components/ListComponent";
import { HouseSkeleton } from '../components/SkeletonComponent';


export function Housing(){

    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);

    const list = [

        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Studio',
            'image' : '../img/stylish.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Appartement',
            'image' : '../img/stylish.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },
        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
            'price' : '150 000',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
        },

        {
            'title' : 'Logement',
            'image' : '../img/stylish.jpg',
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
                <HouseList /> 
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
                                    <HouseContainer image={ item.image } price={ item.price } title={ item.title } desc={ item.desc } id={ index } />
                                </div> 
                            )

                        })
                     ) : ( <div className="row"> <HouseSkeleton value={ 6 } design={"col-md-6 col-lg-4 mb-5"} />  </div>  )      
                    }
                    
                </div> 
            </div> 
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}


