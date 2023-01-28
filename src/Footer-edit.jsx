import React from 'react';
import CSS from './Footer.css';
import Digitalogo from './Digitalogo.svg';

const Footer = () => {

  return (
    <footer className="footer">
      <section className="footer__logo">
        <img className="footer__logo-img" src={Digitalogo} alt="" />
        <h2 className="footer__logo-text">Digital Store</h2>
      </section>
      <div className="footer__description">
        <p className="footer__description-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.

          <p>
            Impedit ullam minima, aliquam architecto magni
          </p>

          <p>
            ratione dolore maiores iste quod velit,
          </p>

          <p>
            corporis culpa harum sint aperiam corrupti saepe!
          </p>

          <p>
            Aspernatur, fugit nesciunt.
          </p>
        </p>
      </div>

      <div className="footer__container">
        <h3 className="footer__container-title">Informações</h3>

        <ul className="footer__container-list">
          <li className="footer__container-item">Sobre Drip Store</li>
          <li className="footer__container-item">Segurança</li>

          <li className="footer__container-item">Wishist</li>

          <li className="footer__container-item">Blog</li>

          <li className="footer__container-item">Trabalhe conosco</li>

          <li className="footer__container-item">Meus pedidos</li>
        </ul>
      </div>

      <div className="footer__container">
        <h3 className="footer__container-title">Categorias</h3>
        <ul className="footer__container-list">
          <li className="footer__container-item">Calças</li>
          <li className="footer__container-item">Camisas</li>
          <li className="footer__container-item">Bonés</li>
          <li className="footer__container-item">Headphones</li>
          <li className="footer__container-item">Tênis</li>
        </ul>
      </div>
      
      <div className="footer__address">
        <h2 className="footer__address-text">
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          (85) 3051-3411
        </h2>
        <p className="footer__address-copyright">@ 2022 Digital College</p>
      </div>
    </footer>
  )
}

export default Footer;
