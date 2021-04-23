export const getGifs = async( category ) => {
            
     // Colocamos la url completa que copiamos de postman
     const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=zrmAEen6j0ZdRx1eJEgT2Oyc5VCuwLNW`;

     // Hacemos el fetc a la url de la API
     const resp = await fetch( url );
     const { data } = await resp.json();

     const gifs = data.map( img => {
          return {
               id: img.id,
               title: img.title,
               url: img.images?.downsized_medium.url
          };
     });

     return gifs;
};