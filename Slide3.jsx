import tenisThird from './assets/tenisThird.svg'


function Slide3() {
  return (
    <div className='container1'>
      <div >
        <img src={tenisThird} alt="" />
      </div>
      <div>
        <div className='secondTitle'>Melhores ofertas personalizadas</div>
        <div className='mainTitle'>Confira a coleção 2023!</div>
        <div className='paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
        <div className='container3' ><input className='btn' type="button" value="Ver Ofertas" /></div>

      </div>
    </div>
  )
}
export default Slide3