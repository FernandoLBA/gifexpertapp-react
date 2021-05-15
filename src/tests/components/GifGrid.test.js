import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import '@testing-library/jest-dom';
jest.mock('../../hooks/useFetchGifs');

describe( 'Pruebas al componente <GifGrid />', () => {
     
     const category = 'Goku';

     test( 'Debe mostrar el componente <GifGrid /> correctamente', () => {

          // Establece las propiedades por defecto del state del custom hook useFetchGifs
          useFetchGifs.mockReturnValue({
               data: [],
               loading: true     
          });

          const wrapper = shallow( <GifGrid category={ category }/> );
          expect( wrapper ).toMatchSnapshot();
     } );

     test( 'Debe mostrar items cuando se cargan imágenes con el custom hook useFetchGifs', () => {
          
          // Creamos un array de objetos con datos retornados por el helper getGifs
          const gifs = [{
               id: 'ABC',
               title: 'Cualquier cosa',
               url: 'https://localhost/cualquier/cosa.jpg'
          }];

          // le mandamos el array gifs al state de useFetchGifs
          useFetchGifs.mockReturnValue({
               data: gifs,
               loading: false     
          });

          const wrapper = shallow( <GifGrid category={ category }/> );

          // Esta es la básica
          expect( wrapper ).toMatchSnapshot();

          // Estas son más precisas y específicas
          expect( wrapper.find( 'p' ).exists() ).toBe( false );
          expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );
     } );
} );
