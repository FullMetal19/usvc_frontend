import React from 'react';

export function Header2() {

return (

    <div className="container-fluid"> 
        <TopBar />
        <NavBar />
    </div>

    )
}


function TopBar (){

    return (
  
      <div className="row bg-foot1 d-flex justify-content-between align-items-center px-4 py-2"> 
  
          <div className="col-md-4 d-flex align-items-center"> 
              <div className="d-flex align-items-center justify-content-center me-5">
                  <img src={'../img/icons8-nouveau-message-96.png'} alt="Logo" width={20} height={20} className="me-1 hide" />
                  <span className="color-gray hide" > usvc@gmail.com </span>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                  <img src={'../img/icons8-position-100-3.png'} alt="Logo" width={20} height={20} className="me-1 hide" />
                  <span className="color-gray hide" > Sanar,Saint Louis </span>
              </div>
          </div>
  
          <div className="col-md-4 d-flex align-items-center justify-content-end"> 
              <span className="color-gray me-5"> Français </span>
              <div className="col-md-4 d-flex"> 
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-twitter-100.png'} alt="Logo" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-facebook-90.png'} alt="Logo" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-instagram-100.png'} alt="Logo" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-lecture-de-youtube-100.png'} alt="Logo" width={20} height={20} className="" /> </a>
                  <a className="me-2 nav-link" href="/"> <img src={'../img/icons8-tic-tac-100.png'} alt="Logo" width={20} height={20} className="" /> </a>
              </div>
          </div>
      </div>
    )
  }
  
  function NavBar () {
    return (

    <div className="row bg-white shadow px-3"> 
        <nav className="navbar navbar-expand-lg "> 
  
                {/* <!-- toggle button --> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
  
                {/* <!-- links --> */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <div className="d-flex align-items-center justify-content-center">
                            <img src={'../img/icons8-accueil-128.png'} alt="Logo" width={60} height={60} className="" />
                            <span className="h1 ms-2 text-clr bold" > USVC </span>
                        </div>
                    </div>
                    <div className="navbar-nav gap-4">          
                        <a className="nav-link text-clr link-outline" href="/"> Accueil </a>
                        <a className="nav-link text-clr link-outline" href="/logement"> Logement + </a>
                        <a className="nav-link text-clr link-outline" href="/terrain"> Terrain + </a>
                        <a className="nav-link text-clr link-outline" href="/service"> Service + </a>
                        <a className="nav-link text-clr link-outline" href="/contact"> Contact </a>
                        <a className="btn btn-main" href="/connexion"> Se-connecter </a> 
                    </div>
                </div>
  
           
        </nav>
    </div>

    )
  }
  
//   function Text (){
//     return (
//       <div className="row d-flex justify-content-center align-items-center px-4"> 
//           <div className="col-lg-5 p-4 d-flex flex-column justify-content-center mt-6 align-items-center"> 
//               <span className="text-center display-4 bold color-white mb-2"> Lorem Ipsum text of the and us </span>
//               <span className="text-center color-white mb-4"> Lorem Ipsum text of the and us Lorem Ipsum text of the and us and us Lorem Ipsum text of the and us </span>
//               <a className="btn btn-lg btn-main px-5 py-3" href=""> GET STARTED NOW </a> 
//           </div>
//       </div>
//     )
//   }
  