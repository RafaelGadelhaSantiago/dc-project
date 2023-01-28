import React from 'react';
import Digitalogo from './Digitalogo.svg'
function Footer() {  

    return (
        <div className="fundo">
          <footer>
            <div>
     
          <img className="dc" src={Digitalogo} alt="" /><h2>Digital Store</h2> 
            </div>
            <div >
            
                <section>
                <p className="descricao">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <br/>
                 Impedit ullam minima, aliquam architecto magni
                 <br/>
                  
                 ratione dolore maiores iste quod velit,
                 <br/>
                  corporis culpa harum sint aperiam corrupti saepe! 
                 <br/>
                  Aspernatur, fugit nesciunt.</p> 
                </section>
               
            </div >
            <div className="Container">
                <ul className="informacoes">
                    <h3 className="title">Informações</h3>
                      <br/>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus pedidos</li>
                </ul>
            </div>
            <div className="Container">
                <ul className="categorias">
                    <h3 className="title"> Categorias</h3>
                      <br/>
                    <li>Calças</li>
                    <li>Camisas</li>
                    <li>Bonés</li>
                    <li>Headphones</li>
                    <li>Tênis</li>                  
               </ul>

            </div>
            <div>
           <h2>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
(85) 3051-3411</h2> 
  <p>@ 2022 Digital College</p>
            </div>
            </footer>
        </div>
        
    )
}

export default Footer;
