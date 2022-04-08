import React, { useState }  from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = ()=>{
    const [categories, setCategories] = useState([])


    return(
        <React.Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>

            <ul>
                {
                    categories.map( category => (
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    ))
                } 
                
            </ul>
        </React.Fragment>
    )
}

export default GifExpertApp;