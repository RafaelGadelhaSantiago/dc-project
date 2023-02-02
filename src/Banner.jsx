// function Banner() {
//     return (
//         <div class="container">

//             <div class="info"><h5>Melhores ofertas personalizadas</h5></div>

//             <div class="info"><h1>Queima de Estoque Nike 🔥</h1></div>

//             <div class="info"><h4>Consequat culpa exercitation mollit nisi excepteur do
//                 do tempor laboris eiusmod irure consectetur.</h4></div>

//             <div style={{
//                 color: 'red',
//                 width: '100%',
//                 border: '1px solid blue',
//                 display: 'flex',
//                 justifyContent: 'flex',
//                 flexDirection: 'column'

//             }}><h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat enim dolores, ducimus voluptates beatae porro non? Beatae perferendis obcaecati at, fuga eius facere repellat atque iusto quia tempora, sit necessitatibus.</h5></div>


//         </div>
//     );
// }

// export default Banner;


import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import { useState } from 'react'

function Banner() {
  const arraySlides = [<Slide1 />, <Slide2 />, <Slide3 />]
  const [indice, setIndice] = useState(0)
  return (
    <div className='div-btn'>
      {arraySlides[indice]}
      <div ><input className='circle-btn'type="button" value="" onClick={() => setIndice((indice + arraySlides.length - 1) % arraySlides.length)} /></div>
      <div ><input className='circle-btn' type="button" value="" onClick={() => setIndice((indice + arraySlides.length + 1) % arraySlides.length)} /></div>
      {/* <div>{indice}</div> */}
    </div>
  )
}
export default Banner
