import React, { useEffect, useState }  from 'react';
import Slider from "react-slick";

import { SectionTitle } from "./Component";
import { SubTitle } from "./Component";
import { Testimonial } from './Component';

import { ServiceContainer } from './Component';
import { LocationContainer } from './Component';
import { HouseContainer } from './Component';
import { GroundContainer } from './Component';


import { HouseSkeleton } from './SkeletonComponent';
import { ServiceSkeleton } from './SkeletonComponent';
import { LocationSkeleton } from './SkeletonComponent';
import { GroundSkeleton } from './SkeletonComponent';
import { TestimonialSkeleton } from './SkeletonComponent';

export function ServiceList() { 
    
    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);

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
        
    ];

    useEffect(() => {

        setTimeout(() => {

            setData( list ); 
            setLoading(true); 
            
        }, 10000);

    
      }, []);

    return (

    <div className="container">
        <SectionTitle text={ 'Lorem Ipsum is simply' } />
        <div className="row py-5"> 
        {  loading ? (

           data.map( (item , index) => {

            return (
  
                <ServiceContainer title={ item.title } desc={ item.desc } > <a type="submit" href={"/service"} className="btn btn-white mb-2 px-4"> Explorer plus </a> </ ServiceContainer>
            )

           }) 
        ) :( <div className="row"> <ServiceSkeleton value={ 3 } /> </div> )  
        }
        </div> 
    </div>


    )
} 

export function LocationList() {

    const settings = config();

    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);

    const list = [

        {
            'title' : 'Saint Louis',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry.'
        },
    
        {
            'title' : 'Dakar',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the industry.'
        },
    
        {
            'title' : 'Thies',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the industry.'
        },
    
        {
            'title' : 'Kaolack',
            'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry.'
        },
    
        {
            'title' : 'Fatick',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the industry.'
        },
    
        {
            'title' : 'Ziguinchor',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the industry.'
        },
            
    ];

    useEffect(() => {

        setTimeout(() => {
    
            setData( list ); 
            setLoading(true); 
                
        }, 10000);
    
        
    }, []);

    return (

        <div className="container py-5"> 
            <SectionTitle text={ 'Lorem Ipsum is simply' } />
            <SubTitle text={ 'Lorem Ipsum is simply' } />
            <div className="row mt-4"> 
                    
                
                    { loading ? (

                <div className="slider-container">
                    <Slider {...settings}> { 

                        data.map( (item , index) => {

                        return (

                            <LocationContainer title={ item.title } desc={ item.desc } id={ index } />
  
                            )
                        }) }

                    </Slider>
                </div>

                    ) :  ( <div className="row"> <LocationSkeleton value={ 3 } design={"col-md-6 col-lg-4 mb-5"} /> </div> ) 
                    }  

            </div> 
        </div> 

    )
} 


export function HouseList() { 

    var settings = config()

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
            }
            
        ];

        useEffect(() => {

            setTimeout(() => {

                setData( list ); 
                setLoading(true); 
                
            }, 10000);

        
          }, []);

    return (

        <div className="container py-5"> 
            <SectionTitle text={ 'Lorem Ipsum is simply' } />
            <SubTitle text={ 'Lorem Ipsum is simply' } />
            <div className="row mt-4"> 
                    
                {  loading ? (

                <div className="slider-container mb-4">
                    <Slider {...settings}> {

                        data.map( (item , index) => {

                        return (

                            <HouseContainer title={ item.title } desc={ item.desc } image={ item.image } price={ item.price } id={ index } />
  
                            )
                        })}
                    </Slider>
                </div>
                    ) : ( <div className="row"> <HouseSkeleton value={ 6 } design={"col-md-6 col-lg-4 mb-5"} />  </div>  )   
                    }  


            </div> 
        </div> 
    )
} 



export function GroundList() { 

    const settings = config()

    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);
    
        const list = [

            {
                'title' : 'Parcelle de  terrain',
                'image' : '../img/terrain.jpg',
                'price' : '5 000 000',
                'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
            },
            {
                'title' : 'Parcelle de  terrain',
                'image' : '../img/terrain.jpg',
                'price' : '5 000 000',
                'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
            },
            {
                'title' : 'Parcelle de  terrain',
                'image' : '../img/terrain.jpg',
                'price' : '5 000 000',
                'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
            },
            {
                'title' : 'Parcelle de  terrain',
                'image' : '../img/terrain.jpg',
                'price' : '5 000 000',
                'desc' : 'this is the location description Lorem Ipsum is simply dummy text of the industry...'
            },
            {
                'title' : 'Parcelle de  terrain',
                'image' : '../img/terrain.jpg',
                'price' : '5 000 000',
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

        <div className="container py-5"> 
            <SectionTitle text={ 'Lorem Ipsum is simply' } />
            <SubTitle text={ 'Lorem Ipsum is simply' } />
            <div className="row my-5"> 
                    
                    {  loading ? (

                <div className="slider-container">
                    <Slider {...settings}> {

                        data.map( (item , index) => {

                        return (

                            <GroundContainer title={ item.title } desc={ item.desc } image={ item.image } price={ item.price } id={ index } />
  
                            )
                        })}

                    </Slider>
                </div>
                    ) : (  <div className="row"> <GroundSkeleton value={ 3 } design={"col-md-6 col-lg-4 mb-5"} />  </div>  )
                    }  


            </div> 
        </div> 

)
} 


const config = ()=>{

    const conf = {

        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
        ]
      };

      return conf ;
}

export function TestimonialList() { 
    
    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);

    const list = [

        {
            'title' : 'This is the title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },

        {
            'title' : 'This is the title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },

        {
            'title' : 'This is the title',
            'desc' : 'this is the service description Lorem Ipsum is simply dummy text of the and typesetting industry.'
        },

        {
            'title' : 'This is the title',
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

    <div className="container py-5">
        <SectionTitle text={ 'Lorem Ipsum is simply' } />
        <div className="row my-5 "> 
        {  loading ? (

           data.map( (item , index) => {

            return (
  
                <Testimonial  title={ item.title } desc={ item.desc } /> 

            )
           }) 
        ) : (  <div className="row">  <TestimonialSkeleton value={ 4 } /> </div> ) 
        }
        </div> 
    </div>


    )
} 