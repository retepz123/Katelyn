import logo from '../image/logo2.png';
import '../App.css';

function NavBar() {

  return (
    <nav className='nav'>
      <div className='head'>
        <div className='head-text'>
        <h1 className='kate'>Hi, I'm Katelyn</h1>
        </div>

        <img src={logo} className='logo' />
      </div>
    </nav>
  );
}

export default NavBar;