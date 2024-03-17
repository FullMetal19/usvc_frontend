import React from 'react'

export function PayementForm () {

    return (

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
    )
}

export function MessageForm () {

    return (

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

    )
}

// *******************************************************************************************

export function HouseForm1 ( { method } ) {

    return (

        <div className="row mb-5" > 
             
            <div className="col-md-12 mb-5 px-0" > 
                <div className="row" > 
                    <div className="col-md-4" > 
                        <div className="d-flex bg-main align-items-center px-2" > 
                            <span className="fs-md color-white bold"> 1. </span>
                        </div> 
                    </div> 
                    <div className="col-md-4" > 
                        <div className="d-flex bg-three-clr align-items-center px-2" > 
                            <span className="fs-md bold"> 2. </span>
                        </div> 
                    </div>
                    <div className="col-md-4" > 
                        <div className="d-flex bg-three-clr align-items-center px-2" > 
                            <span className="fs-md bold"> 3. </span>
                        </div> 
                    </div>
                </div> 
            </div> 
         
            <div className="col-md-12" >

                <div className="row p-5 border mb-5" > 

                    <div className="col-md-12 mb-2" > 
                        <span className="border-left-main h6 ps-1"> Ipsum is simply dummy </span> 
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 

                    <div className="col-md-12 mb-2" > 
                        <span className="border-left-main h6 ps-1"> Ipsum is simply dummy </span> 
                    </div>
                    <div className="col-md-12 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Numéro de téléphone " required />
                    </div>
                    <div className="col-md-12 mb-4" > 
                        <textarea className="form-control" rows={6} placeholder="Entrer votre message"> Entrer votre message </textarea>
                    </div>

                    <div className="col-md-12 mb-2" > 
                        <span className="border-left-main h6 ps-1"> Ipsum is simply dummy </span> 
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 

                    <div className="col-md-12 mb-2" > 
                        <span className="border-left-main h6 ps-1"> Ipsum is simply dummy </span> 
                    </div> 
                    <div className="col-md-4 mb-2" > 
                        <input type="file" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-8 mb-2" > 
                        <input type="link" name="" className="form-control" placeholder="link video" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <span className="main-color fs-xs"> Size file dummy simply dummy simply dummy </span> 
                    </div>

                    <div className="col-md-12 mb-4 text-end" > 
                        <span className="btn btn-main" onClick= { ()=>{ method(2) } }> suivant </span> 
                    </div>

                </div>

            </div>
        </div>
    )
}

// *******************************************************************************************

export function HouseForm2 ( { method, children } ) {

    return (

        <div className="row mb-5" > 
             
             <div className="col-md-12 mb-5 px-0" > 
                <div className="row" >  
                    <div className="col-md-4" > 
                        <div className="d-flex bg-three-clr align-items-center px-2" > 
                            <span className="fs-md bold"> 1. </span>
                        </div> 
                    </div>
                    <div className="col-md-4" > 
                        <div className="d-flex bg-main align-items-center px-2" > 
                            <span className="fs-md color-white bold"> 2. </span>
                        </div> 
                    </div>
                    <div className="col-md-4" > 
                        <div className="d-flex bg-three-clr align-items-center px-2" > 
                            <span className="fs-md bold"> 3. </span>
                                    </div> 
                    </div>
                </div> 
            </div> 

            <div className="col-md-12" >

                <div className="row p-5 border mb-5" > 

                    <div className="col-md-12 mb-2" > 
                        <span className="border-left-main h6 ps-1"> Ipsum is simply dummy </span> 
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div>

                    <div className="col-md-12 mb-2" > 
                        <span className="border-left-main h6 ps-1"> Ipsum is simply dummy </span> 
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 

                    <div className="col-md-12 mb-2" > 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30675.639972714347!2d-16.4464881!3d16.041862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2ssn!4v1710460036573!5m2!1sfr!2ssn" className="img-slide" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                    </div> 

                    <div className="col-md-12 my-4 text-end" >
                        <div className="" >  
                            <span className="btn btn-white me-4" onClick= { ()=>{ method(1) } } > precedent </span>
                            <span className="btn btn-main" onClick= { ()=>{ method(3) } } > suivant </span>
                        </div> 
                    </div>

                </div>

            </div>
        </div>
    )
}


// *******************************************************************************************

export function HouseForm3 ( { method, children } ) {

    return (

        <div className="row mb-5" > 
             
             <div className="col-md-12 mb-5 px-0" > 
                <div className="row" > 

                    <div className="col-md-4" > 
                        <div className="d-flex bg-three-clr align-items-center px-2" > 
                            <span className="fs-md bold"> 1. </span>
                        </div> 
                    </div>
                    <div className="col-md-4" > 
                        <div className="d-flex bg-three-clr align-items-center px-2" > 
                            <span className="fs-md bold"> 2. </span>
                        </div> 
                    </div>
                    <div className="col-md-4" > 
                        <div className="d-flex bg-main align-items-center px-2" > 
                            <span className="fs-md color-white bold"> 3. </span>
                        </div> 
                    </div> 
                </div> 
            </div> 

         
            <div className="col-md-12" >

                <div className="row p-5 border mb-5" > 

                    <div className="col-md-12 mb-2" > 
                        <span className="border-left-main h6 ps-1"> Ipsum is simply dummy </span> 
                    </div> 
                    <div className="col-md-12 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre prénom" required />
                    </div> 
                    <div className="col-md-6 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div>
                    <div className="col-md-12 mb-4" > 
                        <input type="text" name="" className="form-control" placeholder="Entrer votre nom" required />
                    </div> 

                    <div className="col-md-12 my-4 text-end" >
                        <div className="" >  
                            <span className="btn btn-white me-4" onClick= { ()=>{ method(2) } } > precedent </span>
                            <span className="btn btn-main" > Enregistrer </span>
                        </div> 
                    </div>

                </div>

            </div>
        </div>
    )
}
