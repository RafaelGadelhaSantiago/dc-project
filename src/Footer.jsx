import "./footer.css"
import Digitalogo from './Digitalogo.svg'
function Footer() {  

    return (
        <div className="fundo">
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
               
            </div>
            <div className="Container">
                <ul>
                    <li>Informações</li>
                      <br/>
                    <li>Sobre Drip Store</li>
                    <li>Segurança</li>
                    <li>Wishist</li>
                    <li>Blog</li>
                    <li>Trabalhe conosco</li>
                    <li>Meus pedidos</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li> Categorias</li>

                    <li>Calças</li>
                    <li>Camisas</li>
                    <li>Bonés</li>
                    <li>Headphones</li>
                    <li>Tênis</li>                  
               </ul>
            </div>

        </div>
    )
}

export default Footer;
