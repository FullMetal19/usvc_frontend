import React, { useEffect, useState } from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import Slider from "react-slick";


export function GroundDetail(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const [ loading , setLoading ] = useState(false);
    const [ data , setData ] = useState([]);
    const [ img , setImage ] = useState([]);

    const list =
        {
            'images' : {

                'image': '../img/pexels-pixabay-271624.jpg',
                'image': '../img/pexels-binyamin-mellish-1396122.jpg',
                'image': '../img/terrain.png'
            } ,
            'tel1' : '+221 77 000 00 00',
            'tel2' : '+221 33 000 00 00 '
        };

    const images =
        {
            'image1' : '../img/terrain.jpg',
            'image2' : '../img/pexels-binyamin-mellish-1396122.jpg',
            'image3' : '../img/terrain.jpg'
        };

    useEffect(() => {

        setTimeout(() => {

            setData( list ); 
            setImage( images )
            setLoading(true); 
            
        }, 1000);

    
      }, []);

    return (

        <div>

            <Header2 />

            {/* ************************************************************************ */}   
            <div className="container-fluid bg-three-clr py-5 px-4 d-flex justify-content-center"> 
               <span className="h3 text-center"> Détail du terrain </span>
            </div>

            {/* ************************************************************************ */}   
            <div className="container-fluid px-4 pb-5"> 
                <div className="row d-flex justify-content-between my-5">
                    <div className="col-md-7">
                        <div className="slider-container">
                            <Slider {...settings}>
                                <div className="d-flex" > <img src={img.image1} alt="Logo" height={400} className="w-100" />  </div>
                                <div className="d-flex" > <img src={img.image2} alt="Logo" height={400} className="w-100" />  </div>
                                <div className="d-flex" > <img src={img.image3} alt="Logo" height={400} className="w-100" />  </div>
                            </Slider>
                        </div> 
                    </div>
                    <div className="col-md-5 px-4 d-flex flex-column">
                        <span className='h2 bold mt-2' > This is the title of this saction </span>
                        <div className="d-flex align-items-center my-3">
                            <img src={'../img/icons8-calendrier-96.png'} alt="Logo" width={20} height={20} className="me-1 hide" />
                            <span className="ms-2" > 19/09/2024 </span>
                        </div>
                        <span className='fs-lg border-left-main mb-4' > Description </span>
                        <span className='text-clr mb-4 text-justify' > this is the location description Lorem Ipsum is simply dummy text of the industrythis this is the location description Lorem Ipsum is simply dummy text of the industrythis is the location description Lorem Ipsum is simply dummy text of the industry this is the location description Lorem Ipsum is simply dummy text of the industrythis is the location description Lorem Ipsum is simply dummy text of the industry </span>
                        <div className="d-flex gap-3">
                            <div className="d-flex align-items-center py-2 px-4 bg-main border-main">
                                <span className="ms-2 color-white" > A vendre </span>
                            </div> 
                            <div className="d-flex align-items-center py-2 px-4 border-main">
                                <img src={'../img/icons8-calendrier-96.png'} alt="Logo" width={20} height={20} className="me-1 hide" />
                                <span className="ms-2 main-color" > 5 000 000 </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ************************************************************************ */}
            <div className="container-fluid px-4 pb-5"> 
                <div className="row d-flex justify-content-between mb-5">

                    {/* ********************************** LEFT CONTAINER ************************************** */}
                    <div className="col-md-8 ps-4 pe-5 py-4 d-flex flex-column">
                      
                        <div className="mb-5"> <span className="color-white py-2 px-4 bg-main border-main cursor rounded-2 shadow" > Voir la localisation </span> </div>
                
                        {/* ******************************* FORM 1 ***************************************** */}
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
                        {/* ************************************************************************ */}

                        <div className="row d-flex flex-column mt-4" > 
                           <span className="mb-3 h4 main-color bold border-left-main ms-3" width="200" height="200" > The location description </span>
                           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30675.639972714347!2d-16.4464881!3d16.041862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1710460036573!5m2!1sfr!2ssn" className="img-slide" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    {/* ********************************** RIGHT CONTAINER ************************************** */}
                    <div className="col-md-4 px-4 d-flex flex-column">

                        <div className="row d-flex flex-column border bg-white"> 
                            <div className="d-flex justify-content-center align-items-center my-3 " > 
                                <span className='circle bg-snd-clr' > <img src={'../img/icons8-accueil-128.png'} alt="Logo" width={60} height={60} className="" /> </span>
                            </div>
                            <span className="text-center text-clr h4 mb-2" width="200" height="200" > the location description </span>
                            <span className="text-center text-clr mb-4 px-4" width="200" height="200" > this is the location description Lorem Ipsum is simply dummy text of the industrythis this is  </span>
                            <div className="d-flex justify-content-center p-2 bg-main"> 
                                <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-twitter-100.png'} alt="Logo" title="twitter" width={20} height={20} className="" /> </a>
                                <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-facebook-90.png'} alt="Logo" title="facebook" width={20} height={20} className="" /> </a>
                                <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-instagram-100.png'} alt="Logo" title="instagram" width={20} height={20} className="" /> </a>
                                <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-lecture-de-youtube-100.png'} alt="Logo" title="youtube" width={20} height={20} className="" /> </a>
                                <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-tic-tac-100.png'} alt="Logo" title="tik tok" width={20} height={20} className="" /> </a>
                            </div>
                        </div>

                        {/* ********************************** FORM 2 ************************************** */}
                        <div className="row border px-2 my-5" > 

                            <div className="col-md-12 mb-5 mt-4" > 
                                <div className=" d-flex flex-column border-left-main ps-2 ms-1" > 
                                    <span className="fs-lg bold text-clr"> Lorem Ipsum is simply dummy </span>
                                    <span className="text-clr"> Lorem Ipsum is simply dummy text of the and typesetting </span>
                                </div> 
                            </div> 
                            <div className="col-md-12 mb-4" > 
                                <input type="text" name="" className="form-control" placeholder="prenom et nom" required />
                            </div> 
                            <div className="col-md-12 mb-4" > 
                                <input type="text" name="" className="form-control" placeholder="numero tel" required />
                            </div> 
                            <div className="col-md-12 mb-4" > 
                                <textarea className="form-control" rows={6} placeholder="Entrer votre message"> Entrer votre message </textarea>
                            </div>
                            <div className="col-md-12 mb-4" > 
                                <button type="submit" className="btn btn-lg btn-main "> Envoyez </button> 
                            </div>

                        </div> 

                    </div>
                </div>
            </div>
            
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}


