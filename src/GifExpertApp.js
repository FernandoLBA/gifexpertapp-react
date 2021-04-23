import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import Footer from './components/Footer';
import { GifGrid } from './components/GifGrid';
import './index.css';

// Creamos el functional component
export const GifExpertApp = () => {

     // lista de categorías:

     // Usamos un Hook
     // const [categories, setCategories] = useState( [ 'One Punch', 'Samurai X', 'Dragon ball Z' ] );

     const [categories, setCategories] = useState( [] );

     // TAREA
     // Al oprimir el botón agregar, debe agregar un nuevo 
     // elemento al arreglo.
     // const handleAdd = () => {
          
     //      const valor = 'Caballeros del Zodíaco';

     //      // En lugar de usar push, agregamos el nuevo valor de 
     //      // la siguiente manera, carga la copia del arreglo 
     //      // cateogies mediante el spread operator y luego le 
     //      // agrega un valor nuevo después o antes de la copia.
     //      // setCategories( [...categories, valor] ); 

     //      // otra forma con arrow function:
     //      setCategories( categories => [ ...categories, valor ] );
          
     // };

     return (
          <>
               <h1>GifExpert<span>App.</span></h1>
               <AddCategory setCategories={ setCategories }/>
               <ol>
                    {
                         categories.map( category => (
                              <GifGrid 
                                   key={ category }
                                   category={ category }
                              />
                         ) )
                    }
               </ol>
               <Footer />
          </>
     );
};

export default GifExpertApp;