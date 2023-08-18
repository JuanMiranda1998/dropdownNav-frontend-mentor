import Navbar from './components/Navbar';
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <main className='main'>
        <section className='heroImage'>
          <picture >
            <source media="(min-width: 768px)" srcSet="/images/image-hero-desktop.png" />
            <img src="/images/image-hero-mobile.png" alt="image hero" />
          </picture>
        </section>
        <section className='mainContent'>
          <div className="mainInfo">
            <h1 className='mainTitle'>
              Make remote work
            </h1>
            <p className='mainText'>
              Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
            </p>
            <button className='mainButton'>
              Learn more
            </button>
          </div>
          <div className='clientRow'>
            <div className='clientItem'>
              <img src="/images/client-databiz.svg" alt="databiz" />
            </div>
            <div className='clientItem'>
              <img src="/images/client-audiophile.svg" alt="audiophile" />
            </div>
            <div className='clientItem'>
              <img src="/images/client-meet.svg" alt="meet" />
            </div>
            <div className='clientItem'>
              <img src="/images/client-maker.svg" alt="maker" />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
