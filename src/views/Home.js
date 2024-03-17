import React from "react";
import { Header1 } from "../components/Header1";
import { Footer } from "../components/Footer";
import { ServiceList, LocationList, HouseList, GroundList, TestimonialList } from "../components/ListComponent";
import { SearchBar } from "../components/Component";


export function Home(){ 

    return (

        <div>

            <Header1 />   
            {/* ************************************************************************ */}
            <SearchBar />
            {/* ************************************************************************ */}
            <ServiceList/>
            {/* ************************************************************************ */}
            <div className="container-fluid bg-three-clr py-5 my-5"> <LocationList /> </div>
            {/* ************************************************************************ */}
            <HouseList /> 
            {/* ************************************************************************ */}
            <div className="container-fluid slide-fixed my-5 pt-5"> 
                <div className="row d-flex justify-content-center align-items-center pt-5"> 
                    <div className="d-flex justify-content-center align-items-center mt-3" > 
                        <button className='btn circle bg-white shadow mt-5' > <img src={'../img/icons8-jouer-64.png'} alt="Logo" width={50} height={50} className="" /> </button>
                    </div>
                </div>
            </div> 
            {/* ************************************************************************ */}
            <GroundList />
            {/* ************************************************************************ */}
            <TestimonialList />
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}


