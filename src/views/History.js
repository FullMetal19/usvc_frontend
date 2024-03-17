import React from "react";
import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";


export function History(){

    return (

        <div>

            <Header2 />

            {/* ************************************************************************ */}
            <div className="container pb-5"> 
                <div className="row d-flex justify-content-center my-5">

                    <div className="col-md-12 mb-5 border p-5" > 
                        <div className=" d-flex flex-column border-left-main ps-2 ms-1" > 
                            <span className="fs-lg bold text-clr"> Historique des payements </span>
                            <span className="text-clr"> Lorem Ipsum is simply dummy text of the and typesetting </span>
                            <span className="text-clr"> Montant : 100 000 Fcfa </span>
                        </div> 
                    </div> 

                    {/* ********************************** LEFT CONTAINER ************************************** */}
                    <div className="col-lg-12">
                   
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"> # </th>
                                <th scope="col"> Mois </th>
                                <th scope="col"> Année </th>
                                <th scope="col"> Etat </th>
                                <th scope="col"> Date </th>
                                <th scope="col"> Montant </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Payé</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Non payé</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                        
                    </div>
                        
                </div>
            </div>
            
            {/* ************************************************************************ */}
            <Footer /> 

        </div>
    )
}