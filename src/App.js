import './App.scss';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import AboutBill from './Components/AboutBill';
import Carousel from './Components/Carousel';
import Gallery from './Components/Gallery';
import WorkExamples from './Components/WorkExamples';
import Contact from './Components/Contact';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Hero />
			<AboutBill />
			<Carousel />
			<Gallery />
			<WorkExamples />
			<Contact />
		</div>
	);
}

export default App;
