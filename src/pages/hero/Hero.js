import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import './Hero.css'

function Hero() { 
     return (
          <>
          <header className='header'>
               <div className='container'>
                    <div className='content text-white'>
                         <h1 className='h1 mb-4 fw-bold'>Katie Reed</h1>
                         <p className='h2 mb-5 fw-bold '>Web developer &amp; designer</p>
                         <button type="button" className="btn btn-outline-light btn-lg text-white fw-bold">Contact Me</button>
                    </div>
               </div>
          </header>
          </>
     );
}

export default Hero;