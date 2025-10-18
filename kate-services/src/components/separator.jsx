import '../App.css';
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
              <button className='inquire' type='button' >Inquire here</button>
             </div>

          ))}
           
          </div>
        </section>

    </div>
  );
}

export default Separator;
