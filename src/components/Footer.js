import React from 'react'

const Footer = () => {

     const year = new Date().getFullYear();

     return (
          <footer>
               <p>Desarrollada por: Fernando Barrios { year }.</p>
          </footer>
     )
}

export default Footer
