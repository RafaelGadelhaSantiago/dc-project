import "./footer.css"
import Digitalogo from './Digitalogo.svg'
function Footer() {

    return (
        <div className="fundo">
            <div>
          <img className="dc" src={Digitalogo} alt="" /> Digital Store
            </div>
            <div >
                <p className="descricao">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ullam minima, aliquam architecto magni ratione dolore maiores iste quod velit, corporis culpa harum sint aperiam corrupti saepe! Aspernatur, fugit nesciunt.</p> 
            </div>

        </div>
    );
}

export default Footer;
