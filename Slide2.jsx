

import './style/slide2.css'

import tenisSecond from './assets/tenisSecond.svg'



function Slide2() {
  return (
    <div className='container1'>
      <div >
        <img src={tenisSecond} alt="" />
      </div>
      <div>
        <div className='secondTitle'>Melhores ofertas personalizadas</div>
        <div className='mainTitle'>Os melhores produtos com os menores preços!</div>
        <div className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div className='container3' ><input className='btn' type="button" value="Ver Ofertas" /></div>
      </div>
    </div >
  )
}
export default Slide2