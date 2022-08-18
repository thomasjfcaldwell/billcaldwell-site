import './Styles/App.scss';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import AboutBill from './Components/AboutBill';
import Gallery from './Components/Gallery';
import WorkExamples from './Components/WorkExamples';
import Contact from './Components/Contact';

function App() {
	return (
		<div className='App'>
			<header className='header'>
				<Nav />
				<Hero />
			</header>
			<main className='main'>
				<AboutBill />
				<Gallery />
				<WorkExamples />
			</main>
			<footer className='footer'>
				<Contact />
			</footer>
		</div>
	);
}

export default App;
