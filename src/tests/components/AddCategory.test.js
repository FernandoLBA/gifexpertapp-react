import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';


describe( 'Pruebas al componente <AddCategory />', () => {
     
     // creamos una función así:
     // const setCategories = () => {};

     // o una función así:
     const setCategories = jest.fn();

     // le mandamos la función requerida al componente
     let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

     // Reinicia todo
     beforeEach( () => {
          // Esto reinicializará el jest
          jest.clearAllMocks();

          // reestablecerá el componente
          wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
     } );

     test( 'Debe mostrar el componente <AddCategory /> correctamente', () => {
          expect( wrapper ).toMatchSnapshot();
     } );

     test( 'Debe cambiar la caja de texto', () => {
          const input = wrapper.find( 'input' );
          const value = 'Hola Mundo';

          input.simulate( 'change', { target: { value } } );

          expect( wrapper.find( 'p' ).text().trim() ).toBe( value );
     } );

     test( 'No debe postear la información con submit', () => {
          
          // le mandamos el evento al submit
          wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

          expect( setCategories ).not.toHaveBeenCalled();
     } );

     test('Debe llamar setCategories y limpiar la caja de texto', () => {
          
          const input = wrapper.find( 'input' );
          const value = 'Hola Mundo';
          
          // simular inputChange
          input.simulate( 'change', { target: { value } } );

          expect( wrapper.find('p').text().trim() ).toBe( value );

          // Simular submit
          wrapper.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

          // Se debe llamar a setCategories
          expect( setCategories ).toHaveBeenCalled();

          // El input debe estar vacío
          expect( input.text() ).toBe( '' );
     });
} );
