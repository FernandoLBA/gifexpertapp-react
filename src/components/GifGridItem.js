import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ( { title, url } ) => {

     return (
          <div className="card animate__animated animate__zoomIn">
              <img src={ url } alt={ title }></img>
              {/* limita el contenido del texto */}
              {/* <p>{ title.substr( 0, 15 ) }...</p> */}
              <p>{ title }</p>
          </div>
     );
};

export default GifGridItem;

GifGridItem.propTypes = {
     title: PropTypes.string.isRequired,
     url: PropTypes.string.isRequired
};
