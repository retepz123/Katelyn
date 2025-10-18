import NavBar from '../components/NavBar.jsx';
import '../App.css';
import kate from '../image/kate.png'
import Separator from '../components/separator.jsx';

function Home() {
  return (
    <div className='main'>
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
             <div className='text-kate'>
              <div className='sub-container1'>
             <span className='text-hi'>
                Hi, I’m Katelyn, your trusted partner in managing life’s
                financial journey.
              </span>
           </div>
             </div>
          </div>
          <div className='banner-pic'>
            <img src={kate} alt='Kate' className='kate-pic'/>
          </div>
        </div>
        </div>
          <div className='sub-container'>
          <div className='sub-text'>
             <div className='text1'>
              <span>
                I offer financial services designed to help you plan and budget
                for your present and future needs — whether personal or
                business. From insurance and accounting to tax compliance, my
                goal is to guide you toward stability, growth, and peace of
                mind. Let’s work together to organize your finances, achieve your goals, and create a brighter, more confident future.

              </span>
            </div>
          </div>
      </div>
      </section>
      <Separator/>

    </div>
  );
}

export default Home;
