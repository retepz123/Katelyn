import NavBar from '../components/NavBar.jsx';
import '/uplift/tax-financial/kate-services/src/App.css';
import kate from '../image/kate.png'
import Separator from '../components/separator.jsx';

function Home() {
  return (
    <div>
      <NavBar />
      <section className='section'>
        <div className='cons'>
           <div className='hero'>
          <div>
            <div>
            <span className='tagline'>Protect. Plan. Prosper.</span>
            </div>
            <div>
              <span className='tag-text'>"Protecting what matters — your life, your business, your peace."</span>
            </div>
          </div>
          <div className='banner-pic'>
            <img src={kate} alt='Kate' className='kate-pic'/>
          </div>
        </div>
        </div>
          <div className='sub-container'>
          <div className='sub-text'>
           <div className='sub-container1'>
             <span className='text-hi'>
                Hi, I’m Katelyn, your trusted partner in managing life’s
                financial journey.
              </span>
           </div>
          </div>
      </div>
      </section>
    
      <Separator />
    </div>
  );
}

export default Home;
