import React from 'react';
import GifExpertApp from '../GifExpertApp';
import { shallow } from 'enzyme';

describe('Pruebas al componente <GifExpertApp />', () => {

     test('Debe hacer match el componente con el snapshot', () => {

          // Como sus props no son obligatorias podemos 
          // simplemente renderizarlo así
          const wrapper = shallow( <GifExpertApp /> );

          expect( wrapper ).toMatchSnapshot();
     });

     test('Debe mostrar una lista de categorias', () => {
          const categories = [ 'Goku', 'Vegeta' ];

          const wrapper = shallow( <GifExpertApp defaultCategories={ categories } />);

          expect( wrapper ).toMatchSnapshot();

          expect( wrapper.find( 'GifGrid' ).length ).toBe( categories.length );
     });
     
})
