import React from 'react';

export function VideoModal( { method }){

    return (

        <div className="modal-container">
            <div className="container pt-5">
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-md-8 bg-three-clr p-4 d-flex flex-column">
                        <div className="text-end"> <button className='btn btn-sm btn-white bold mb-2' onClick={ ()=>{ method ( false ) } } > X </button> </div>
                        <iframe height="315" src="https://www.youtube.com/embed/Wf4nNKVkaPo?si=9cTdnXnG5CLtYg56" className="img-slide" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}