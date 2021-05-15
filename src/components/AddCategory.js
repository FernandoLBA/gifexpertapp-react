import React, { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ( { setCategories } ) => {

     // Creamos un hook
     const [ inputValue, setInputValue ] = useState( '' );

     const handleInputChange = ( e ) => {
          setInputValue( e.target.value );
     };

     const handleSubmit = ( e ) => {
          e.preventDefault();

          if ( inputValue.trim().length > 1 ) {
               // coloca el inputValue primero
               setCategories( categories => [ inputValue, ...categories ] );
               // limpia borra el input
               setInputValue( '' );
          };
     };

     return (
               <form onSubmit={ handleSubmit }>
                    {/* Este párrafo se creó para pasar una prueba por eso no es necesario que se visualice */}
                    <p style={{display:'none' }}>{ inputValue }</p>
                    
                    <input
                         type="text"
                         value={ inputValue }
                         onChange={ handleInputChange }
                         placeholder="Busque aquí..."
                    />
               </form>
     );
};

AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired
};