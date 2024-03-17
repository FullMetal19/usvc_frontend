import React from "react";
import { Header2 } from "../../components/Header2";
import { Footer } from "../../components/Footer";
import { SearchBar } from "../../components/Component";

export function Admin(){

    return (

        <div>

            <Header2 />

            {/* ************************************************************************ */}
            <SearchBar />
            
            <div className="container" > 

                    <div className="row mb-2" > 
                        <span className="border-left-main h6 ps-1"> Résultat de la recherche </span> 
                    </div>

                        <div className="row border p-5" >

                            <div className="col-md-4" > 
                                <div className="d-flex flex-column border" > 
                                    <div className="mb-2" >
                                        <img src={ '../img/stylish.jpg' } alt="Logo" height={200} className="w-100" />
                                    </div>
                                    <div className="d-flex flex-column px-3" >
                                        <span className="text-start text-clr mb-3" > Ipsum is simply dummy Ipsum is simply dummy  is simply dummy </span>
                                        <a className="btn btn-white mb-3" href="/sign-in"> Modifier </a> 
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div> 

            {/* ************************************************************************ */}
            <div className="container py-5"> 
                <div className="row d-flex justify-content-center my-5">

                    <div className="col-md-12 mb-5 border p-5" > 
                        <div className=" d-flex flex-column border-left-main ps-2 ms-1" > 
                            <span className="fs-lg bold text-clr"> Liste des propriétés occupées </span>
                            <span className="text-clr"> Lorem Ipsum is simply dummy text of the and typesetting </span>
                        </div> 
                    </div>

                    {/* ********************************** LEFT CONTAINER ************************************** */}
                    <div className="col-lg-12">
                   
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col"> Ref </th>
                                <th scope="col"> Region </th>
                                <th scope="col"> Type </th>
                                <th scope="col"> State </th>
                                <th scope="col"> Nom </th>
                                <th scope="col"> Historique </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td> <a className="btn btn-sm btn-main mb-3" href="/sign-in"> Plus </a> </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td> <a className="btn btn-sm btn-main mb-3" href="/sign-in"> Plus </a> </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Otto</td>
                                <td> <a className="btn btn-sm btn-main mb-3" href="/sign-in"> Plus </a> </td>
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