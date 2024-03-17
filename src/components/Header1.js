import React from 'react';

export function Header1() {

return (

    <div className="container-fluid slides pt-2"> 
        <TopBar />
        <hr className='border' />
        <NavBar />
        <TextBar />
    </div>
    
    )
}


function TopBar (){

    return (
  
      <div className="row d-flex justify-content-between align-items-center px-4 pt-1"> 
  
          <div className="col-4 d-flex align-items-center"> 
              <div className="d-flex align-items-center justify-content-center me-5">
                  <img src={'../img/icons8-nouveau-message-96.png'} alt="Logo" width={20} height={20} className="hide me-1" />
                  <span className="color-gray hide" > usvc@gmail.com </span>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                  <img src={'../img/icons8-position-100-3.png'} alt="Logo" width={20} height={20} className="me-1 hide" />
                  <span className="color-gray hide" > Sanar,Saint Louis </span>
              </div>
          </div>
  
          <div className="col-4 d-flex align-items-center justify-content-end"> 
              <span className="color-gray me-5"> Français </span>
              <div className="col-md-4 d-flex"> 
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-twitter-100.png'} alt="Logo" title="twitter" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-facebook-90.png'} alt="Logo" title="facebook" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-instagram-100.png'} alt="Logo" title="instagram" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-lecture-de-youtube-100.png'} alt="Logo" title="youtube" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-tic-tac-100.png'} alt="Logo" title="tik tok" width={20} height={20} className="" /> </a>
              </div>
          </div>
      </div>
    )
  }
  
  function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-4">
  
                {/* <!-- toggle button --> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
  
                {/* <!-- links --> */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={'../img/icons8-accueil-128.png'} alt="Logo" width={60} height={60} className="" />
                            <span className="h1 ms-2 color-gray" > USVC </span>
                        </div>
                    </div>
                    <div className="navbar-nav gap-4">          
                        <a className="nav-link color-gray link-outline" href="/"> Accueil </a>
                        <a className="nav-link color-gray link-outline" href="/logement"> Logement + </a>
                        <a className="nav-link color-gray link-outline" href="/terrain"> Terrain + </a>
                        <a className="nav-link color-gray link-outline" href="/service"> Service + </a>
                        <a className="nav-link color-gray link-outline" href="/contact"> Contact </a>
                        <a className="btn btn-main" href="/sign-in"> Se-connecter </a> 
                    </div>
                </div>
  
            </div>
        </nav>
  
    )
  }

  function TextBar () {

    return (
         
        <div className="row d-flex justify-content-center mt-5" >
            <div className="col-lg-4 d-flex flex-column align-items-center mt-5" >
                <span className="text-center color-gray display-4 bold mb-3" > Lorem Ipsum simply dummy </span>
                <span className="text-center color-gray text-clr mb-4" > Lorem Ipsum is simply dummy text of the and typesetting. Lorem Ipsum is simply dummy </span>
                <div> <a className="btn btn-lg btn-main px-5 py-3" href="/sign-in"> Bienvenue </a> </div>  
            </div>
        </div>
  
    )
  }
  