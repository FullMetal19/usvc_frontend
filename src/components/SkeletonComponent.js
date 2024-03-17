import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export function HouseSkeleton( { value, design } ) {
   
    return (

    Array(value).fill(0).map( item => { return (
            
    <div className={ design } > 

        <div className="d-flex flex-column shadow bg-white mx-2"> 
            <div className="d-flex flex-column justify-content-center align-items-center mb-2" >
                <Skeleton width={250} height={190} />
            </div>
            <div className="d-flex flex-column px-3" >
                <Skeleton count={2} width={180} />
                <Skeleton count={2} />
            </div>
            <hr />
            <div className="row d-flex justify-content-between px-3 mb-4" >   
                <div className="col-6" >   
                    <div className="d-flex" >   
                        <Skeleton circle  width={50} height={50} />
                        <div className="ms-1" >   
                            <Skeleton count={2} width={100} />
                        </div>
                    </div>
                </div>
                <div className="col-4" >   
                    <Skeleton />
                </div>
            </div>
        </div>
    </div>

        )})

    )
}


export function ServiceSkeleton( { value } ) {

    return (

    Array(value).fill(0).map( item => { return (

        <div className="col-md-6 col-lg-4 mb-4"> 
            <div className="d-flex flex-column shadow p-4 bg-white"> 
                <div className="d-flex justify-content-center align-items-center mb-2" > 
                    <Skeleton circle  width={120} height={120} /> 
                </div>
                <div className="d-flex justify-content-center align-items-center mb-2" > 
                    <Skeleton width={200} center /> 
                </div>
                <Skeleton count={ 3 } />
            </div>
        </div>
    )})
    )
}

export function LocationSkeleton({ value, design } ) {

    return (

    Array(value).fill(0).map( item => { return (

    <div className={ design } > 

        <div className="d-flex flex-column shadow bg-white mx-2"> 
            <div className="d-flex flex-column justify-content-center align-items-center mb-2" >
                <Skeleton width={250} height={200} />
            </div>
            <div className="d-flex flex-column px-3 pb-4" >
                <Skeleton count={2} />
                <Skeleton width={180} count={2} />
            </div>
        </div>

    </div>
    )})
    )
}

export function GroundSkeleton({ value, design }) {

    return (

        Array(value).fill(0).map( item => { return ( 
    
    <div className={ design } > 

        <div className="d-flex flex-column shadow bg-white mx-2"> 
            <div className="d-flex flex-column justify-content-center align-items-center mb-2" >
                <Skeleton width={250} height={190} />
            </div>
            <div className="d-flex flex-column px-3" >
                <Skeleton width={180} />
                <Skeleton count={2} />
            </div>
            <hr />
            <div className="row d-flex justify-content-between px-3 mb-4" >   
                <div className="col-6" >   
                    <div className="d-flex" >   
                        <Skeleton width={30} height={30} />
                        <div className="ms-1" > <Skeleton width={120} /> </div>
                    </div>
                </div>
                <div className="col-4" >   
                    <Skeleton />
                </div>
            </div>
        </div>
    </div>

    )})
    )
}

export function TestimonialSkeleton( { value }) {
     
    return (
    
    Array(value).fill(0).map( item => { return (

        <div className="col-lg-3 col-md-6  mb-3"> 
            <div className="d-flex flex-column bg-snd-clr p-3 rounded-4">    
                <div className="mb-2"> <Skeleton circle  width={120} height={120} />  </div>
                <div className="mb-2"> <Skeleton count={4} /> </div>
                <div className="mb-2"> <Skeleton width={180} /> </div>
            </div>
        </div> 

    )})     
    )
}

export function ContactSkeleton( { value }) {

    return (

        Array(value).fill(0).map( item => { return (
            
        <div className="col-md-6 col-lg-4 mb-3"> 
            <div className="d-flex flex-column border p-4 bg-white"> 
                <div className="d-flex justify-content-center align-items-center mb-2" > 
                    <Skeleton circle  width={110} height={110} /> 
                </div>
                <div className="d-flex justify-content-center align-items-center mb-2" > 
                    <Skeleton width={200} count={ 2 } /> 
                </div>
            </div>
        </div>
       )})   
    )
}