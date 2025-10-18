import '../App.css';
import Footer from './Footer.jsx';
import { services } from './PostCard.js';

function Separator() {
  return (
    <div>
      <div className='separator'></div>

        <section className='section2'>
          <div className='container-text'>
            <div className='services'>
              <h1 className='service-text'>SERVICES</h1>
            </div>
          </div>

          <div className='cards'> {services.map((services, index) => (
             <div className='sub-card' key={index}>
              <img src={services.image} alt={services.title} className='card-image'/>
              <div className='card-title'>{services.title}</div>
              <div className='card-description'>{services.description}</div>
              <a href='https://mail.google.com/mail/u/0/?fs=1&to=katelynbartolabac@gmail.com&tf=cm' target='_blank'> <button className='inquire' type='button' >Inquire here</button></a>
             </div>

          ))}
           
          </div>
          <Footer/>
        </section>

    </div>
  );
}

export default Separator;
