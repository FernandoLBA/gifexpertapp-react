import { getGifs } from "../../helpers/getGifs";

describe('Pruebas al helper getGifs.js', () => {
     
     test('Debe traer 10 elementos de la categoría', async() => {
          
          const gifs = await getGifs( 'Goku' );

          expect( gifs.length ).toBe( 10 );
     });

     test('Debe traer un array vacío sino mandamos la categoría', async() => {
          
          const gifs = await getGifs( '' );

          expect( gifs.length ).toBe( 0 );
     });
});
