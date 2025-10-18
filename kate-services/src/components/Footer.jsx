import '../App.css'
import footer from '../image/peeter.jpeg';

function Footer() {
  return (
      <footer className='footer'>
        <div className='sub-footer'>
         <img src={footer} alt='footer' className='footer-logo' />
         <p className='copy'>COPYRIGHT ©️ 2025 PETER & KATE</p>

        </div>
      </footer>
  );
}

export default Footer;