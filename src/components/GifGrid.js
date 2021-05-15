import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';


export const GifGrid = ({ category }) => {

     const { data:images, loading } = useFetchGifs( category );

     return (
          <>
               <h2>{ category }</h2>
               { loading && <p className="animate__animated animate__fadeIn">Loading...</p>}
               <div className="card-grid">
                    {
                         images.map( img => (
                              <GifGridItem
                                   key={ img.id }
                                   { ...img }
                              />
                         ))
                    }
               </div>
          </>
     );
};

GifGrid.propTypes = {
     category: PropTypes.string.isRequired
};