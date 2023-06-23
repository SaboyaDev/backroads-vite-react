import About from './components/sections/About'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Navbar from './components/sections/Navbar'
import Services from './components/sections/services/Services'
import Tours from './components/sections/tours/Tours'

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Tours />
			<Footer />
		</>
	)
}

export default App
