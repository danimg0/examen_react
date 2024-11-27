"use client";
import { useState } from "react";

export default function ImgCarousel ({imagenes}) {

    //Guardamos el array de props en este por tenerlo mas controlado
    const imgs = imagenes
    
    //Control de indice 
    const [index, setIndex] = useState(0)

    //Para cuando se vaya atras, se resta 1 al indice, pero si ya no hay más, se vuelve a la ultima imagen
    function handlePrevClick() {
        if (index <= 0) {
            setIndex(imgs.length-1)
        } else {
            setIndex(index-1)
        }
    }

    //Para cuando se vaya para alante, se suma uno al indice, si no hay más, se resetea a 0
    function handleNextClick() {
        if (index >= imgs.length-1) {
            setIndex(0)
        } else {
            setIndex(index+1)
        }
    }

    //El titulo h4 muestra el titulo de la imagen, y la img la imagen, con el indice que corresponde 
    return (
        <div>
            <h4>{imgs[index].titulo}</h4>
            <img className="foto" src={imgs[index].url} />
            <br/>
            <br/>
            <button onClick={handlePrevClick}>Anterior</button>
            <button onClick={handleNextClick}>Siguiente</button>
        </div>
    )
}