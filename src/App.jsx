import './App.scss'
import Logo from './components/Logo'
import Container from './components/Container'

function App() {

  return (
    <main>
      <Container>
      <header className="headerContainer">
          <a href="#"><Logo/></a>
          <div className="headerContainerMenu">
            <a href="">What we Offer</a>
            <a href="">How it Works</a>
            <a href="">Portfolio</a>
          </div>
          <button className='headerContainerButton'>Contact us</button>
      </header>
      <div className="contentContainer">
        <div className="contentContainerHeading">
          <h2>Lets grow your</h2>
          <h2>Social presence</h2>
        </div>
        <div className="bubble fire">
          🔥
        </div>
        <div className="bubble rocket">
          🚀
        </div>
        <div className="bubble bullseye">
          🎯
        </div>
        <div className="bubble shopping">
        🛍️
        </div>
      </div>

      <section>
        <h1>We're the best for what you looking for</h1>
      </section>
      </Container>
    </main>
  )
}

export default App
