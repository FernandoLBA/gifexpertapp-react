import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {
     
     test('Debe retornar el estado inicial', async() => {
          
          // Esta forma no sirve, porque no se puede llamar un 
          // hook fuera de un functional component:
          // const { data:images, loading } = useFetchGifs( 'Goku' );

          // Esta forma funciona usando la librería de pruebas
          // react hooks testing library
          const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Goku' ) );
          
          // Ahora extraemos las variables del hook, mediante
          // la desestructuración del result
          const { data, loading } = result.current;
          
          await waitForNextUpdate();

          expect( data ).toEqual( [] );
          expect( loading ).toBe( true );
     } );

     test('debe retornar un arreglo de imágenes y el loading en false', async() => {
          const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'iron maiden' ) );

          await waitForNextUpdate();

          const { data, loading } = result.current;

          expect( data.length ).toBe( 10 );
          expect( loading ).toBe( false );
     });
})
