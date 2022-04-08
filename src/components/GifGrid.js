import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    //Usaremos nuestro custom hook
    const {data:images, loading} = useFetchGifs(category);

  return (
    <React.Fragment>
        <h3 className='animate__animated animate__bounceInRight animate__delay-1s'>{category}</h3>

        {loading && <p className='animate__animated animate__fadeInDown'>Loading</p> }
        <div className='card-grid'>
            {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}//De esta manera se envia cada props del objeto como prop independiente
                        />
                    ))
            }
        </div>
    </React.Fragment>
  )
}
