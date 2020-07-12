import React, {useState} from 'react';

import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

import gal1 from '../img/artesaniasgaby-gal-01.jpg';
import gal2 from '../img/artesaniasgaby-gal-02.jpg';
import gal3 from '../img/artesaniasgaby-gal-03.jpg';
import gal4 from '../img/artesaniasgaby-gal-04.jpg';
import gal5 from '../img/artesaniasgaby-gal-05.jpg';
import gal6 from '../img/artesaniasgaby-gal-06.jpg';
import gal7 from '../img/artesaniasgaby-gal-07.jpg';
import gal8 from '../img/artesaniasgaby-gal-08.jpg';
import gal9 from '../img/artesaniasgaby-gal-09.jpg';
import gal10 from '../img/artesaniasgaby-gal-10.jpg';
import gal11 from '../img/artesaniasgaby-gal-11.jpg';
import gal12 from '../img/artesaniasgaby-gal-12.jpg';



const Galeria = ()=>{

    const[abreLightbox, setAbreLightbox] = useState(false);
    const[lightboxIndex, setLightboxIndex] = useState();

    const imagenes = [
        {
            url: gal1,
        },
        {
            url: gal2,
        },
        {
            url: gal3,
        },
        {
            url: gal4,
        },
        {
            url: gal5,
        },
        {
            url: gal6,
        },
        {
            url: gal7,
        },
        {
            url: gal8,
        },
        {
            url: gal9,
        },
        {
            url: gal10,
        },
        {
            url: gal11,
        }
    ]

    const abrirLightbox = (index)=>{
        setAbreLightbox(true);
        setLightboxIndex(index);
    }
    const cerrarLightbox = ()=>{
        setAbreLightbox(false);
    }
    return(
        <div className="container">
            <h2 className="text-center mt-4">Algunos de mis trabajos</h2>
            <hr/>
            {
                abreLightbox ? <Lightbox images={imagenes} onClose={cerrarLightbox} startIndex={lightboxIndex}/> : null
            }
            <div className="row mb-4 mt-4">
                <div className="col-sm">
                    <img src={gal1} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(0)}/>
                </div>
                <div className="col-sm">
                    <img src={gal2} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(1)}/>
                </div>
                <div className="col-sm">
                    <img src={gal3} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(2)}/>   
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm">
                    <img src={gal4} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(3)}/>
                </div>
                <div className="col-sm">
                    <img src={gal5} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(4)}/>
                </div>
                <div className="col-sm">
                    <img src={gal6} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(5)}/>   
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm">
                    <img src={gal7} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(6)}/>
                </div>
                <div className="col-sm">
                    <img src={gal8} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(7)}/>
                </div>
                <div className="col-sm">
                    <img src={gal9} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(8)}/>   
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-sm">
                    <img src={gal10} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(9)}/>
                </div>
                <div className="col-sm">
                    <img src={gal11} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(10)}/>
                </div>
                <div className="col-sm">
                    <img src={gal12} alt="" className="img-thumbnail img-gal" onClick={()=>abrirLightbox(11)}/>
                </div>
            </div>
        </div>
    )
}

export default Galeria;