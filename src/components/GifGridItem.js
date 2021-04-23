import React from 'react';

const GifGridItem = ( { title,url } ) => {

     return (
          <div className="card animate__animated animate__zoomIn">
              <img src={ url } alt="gif"></img>
              {/* limita el contenido del texto */}
              <p>{ title.substr( 0,15 ) }...</p>
          </div>
     );
};

export default GifGridItem;
