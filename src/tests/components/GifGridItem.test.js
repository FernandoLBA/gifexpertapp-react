import React from 'react';
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";


describe( 'Pruebas al componente <GifGridItem />', () => {

     const title = 'Un título';
     const url = 'https://localhost/algo.jpg';
     const wrapper = shallow( <GifGridItem title={ title } url={ url }/> );

     test( 'Debe mostrar el componente <GifGridItem /> correctamente', () => {
          
          expect( wrapper ).toMatchSnapshot();
     } );

     test('Debe de tener un párrafo con el title', () => {
          
          const p = wrapper.find( 'p' );
          expect( p.text().trim() ).toBe( title );
     });

     test('El tag img debe tener los atributos url y alt iguales a los props', () => {
          
          const img = wrapper.find( 'img' );
          // prop busca el atributo del tag html, src y alt
          expect( img.prop( 'src' ) ).toBe( url );
          expect( img.prop( 'alt' ) ).toBe( title );
     });

     test('Debe contener animate__zoomIn en el className', () => {
          
          const div = wrapper.find( 'div' );

          // revisa si existe la clase animate__zoomIn en el div
          expect( div.prop( 'className' ).includes( 'animate__zoomIn' ) ).toBe( true );
     });
} );
