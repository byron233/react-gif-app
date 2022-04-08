import { useState, useEffect} from "react"
import { getGifs } from "../helpers/getGifs";

/*Este es nuestro custom hook
es un hook que nosotrso creamos para que nuestro gifGrid sea mas facil de leer
este se encarga de cargar las imagenes y de mostrar un mensaje cuando esta 
cargando y mostrar las imagenes cuando ya haya cargado */

export const useFetchGifs = (category)=>{
    const [estado, setEstado] =  useState({data:[], loading: true});

    /*
        useEffect es un hook el cual nos permite
        ejecutar cierto codigo solo un numero de veces
        que se especifica en el arreglo, si esta vacio
        solo se ejecutara una vez, esto nos sirve en ocaciones
        para evitar un ciclo infinito, ejemplo si nosotros queremos
        cambiar un componente cuando se pida algo a una api
        este se cambiara pero luego volvera a pedir de la api
        y volver a cambiar y asi infinitamente
    */
     useEffect(() =>{
        getGifs(category).then(imgs => {
            setEstado({
                data:imgs,
                loading: false,
            })
        });
        
    }, [category])



    return estado;
}