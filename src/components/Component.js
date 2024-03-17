import React from 'react';

export function SearchBar () {

    return (
         
        <div className="container" >
            <div className="row shadow px-4 py-5 my-5" >

                <div className="col-md-3 mb-2" >
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="col-md-3 mb-2" >
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="col-md-3 mb-2" >
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="col-md-3 text-end mb-2" >
                   <button type="submit" className="btn btn-main"> Rechercher </button>
                </div>

            </div>
        </div>
  
    )
  }

export function ServiceContainer( { children, title , desc } ) {

return (
    
    <div className="col-md-6 col-lg-4 mb-4"> 
        <div className="d-flex flex-column shadow p-4 bg-white"> 
            <div className="d-flex justify-content-center align-items-center mb-2" > 
                <span className='circle bg-snd-clr' > <img src={'../img/icons8-accueil-128.png'} alt="Logo" width={60} height={60} className="" /> </span>
            </div>
            <span className="text-center text-clr h4 mb-2" width="200" height="200" > { title }  </span>
            <span className="text-center text-clr mb-3" width="200" height="200" > { desc }  </span>
            <div className="text-center"> { children } </div>
        </div>
    </div>

    )
}


export function ContactContainer( { image, tel1 , tel2 } ) {

    return (
    
        <div className="col-md-6 col-lg-4 mb-3"> 
            <div className="d-flex flex-column border p-4 bg-white"> 
                <div className="d-flex justify-content-center align-items-center mb-2" > 
                    <span className='circle bg-snd-clr' > <img src={ image } alt="Logo" width={60} height={60} className="" /> </span>
                </div>
                <span className="text-center text-clr mb-2" width="200" height="200" > { tel1 } </span>
                <span className="text-center text-clr mb-3" width="200" height="200"> { tel2 } </span>
            </div>
        </div>
    
        )
    }


export function LocationContainer( { title , desc, id } ) {

    return (

        <div className="d-flex flex-column shadow p-2 bg-white border-btm-main mx-2"> 
            <div className="d-flex flex-column justify-content-center align-items-center mb-2" >
                {/* <span className="text-start property text-clr px-4" > 10 propriétés </span> */}
                <img src={'../img/pexels-pixabay-534228.jpg'} alt="Logo" height={200} className="w-100" />
            </div>
            <span className="text-start text-clr mb-1" > { desc } </span>
            <span className="text-start text-clr h5 mb-1" > { title } </span>
            <a className="mb-2 nav-link text-start main-color link" href={ "/proprietes/" + id } > Plus d'information </a>
        </div>
    
        )
    }


export function GroundContainer( { image, price, desc, title, id } ) {

    return (
    
        <div className="d-flex flex-column shadow bg-white mx-2"> 
            <div className="d-flex flex-column justify-content-center align-items-center mb-2" >
                <img src={ image } alt="Logo" height={200} className="w-100" />
            </div>
            <div className="d-flex flex-column px-3" >
                <span className="text-start main-color h5 mb-1" > { title } </span>
                <span className="text-start text-clr" > { desc } </span>
            </div>
            <hr />
            <div className="d-flex justify-content-between px-3 mb-1" >
                <div className="d-flex align-items-center mb-3">
                    <img src={'../img/icons8-calendrier-96.png'} alt="Logo" width={20} height={20} className="me-1" />
                    <span className="text-start" > { price } Fcfa </span>
                </div>
                <a className="mb-2 nav-link text-start main-color link" href={ "/terrain/"+ id }> voir plus </a>
            </div>
        </div>

        )
    }


export function HouseContainer( { image, price, desc, title, id } ) {

    return (
        
        <div className="d-flex flex-column shadow bg-white mx-2"> 
            <div className="d-flex flex-column justify-content-center align-items-center mb-2" >
                <img src={ image } alt="Logo" height={200} className="w-100" />
            </div>
            <div className="d-flex flex-column px-3" >
                <span className="text-start main-color h6 mb-1" > { price } Fcfa/mois </span>
                <span className="text-start text-clr h5 mb-1" > { title } </span>
                <span className="text-start text-clr" > { desc } </span>
            </div>
            <hr />
            <div className="row d-flex justify-content-between px-3" >   
                <div className="col-7 d-flex align-items-center mb-3">
                    <span className="bg-main color-gray h6 rounded-circle px-2 py-3" > USVC </span>
                    <span className="fs-xs text-start ms-1" > Ipsum is simply dummy </span>
                </div>
                <div className="col-4">
                    <a className="mb-2 text-end nav-link text-start main-color link" href={ "/logement/" + id } > voir plus </a>
                </div>
            </div>
        </div>
                 
        )
    }


export function Testimonial( {title, desc}) {
     
    return (
             
        <div className="col-lg-3 col-md-6 mb-3"> 
            <div className="d-flex flex-column bg-snd-clr p-3 rounded-4"> 
                <span className='circle bg-white border-main mb-2' > <img src={'../img/icons8-citation-à-droite-100.png'} alt="Logo" width={60} height={60} className="" /> </span>
                <span className="text-start text-clr mb-3"> { desc }  </span>
                <span className="text-start text-clr h6"> { title }  </span>
            </div>
        </div> 
              
    )
}
        
export function SectionTitle( { text } ) {
     
    return (
        
        <div className="row py-3 d-flex justify-content-center"> 
            <div className="col-md-6 text-center"> 
                <span className="px-5 py-3 w-100 text-center main-color bg-snd-clr rounded-5"> { text } </span>
            </div> 
        </div>
    )
}

        
export function SubTitle( { text } ) {
             
    return (
        
        <div className="row py-3 d-flex justify-content-center"> 
            <div className="col-md-5 text-center"> 
                <span className="h1 bold text-center text-clr"> { text }  </span>
            </div> 
        </div>
    )
}