import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Hero from './sections/Hero/Hero';
import Features from './sections/Features/Features';
import Extensions from './sections/Extensions_cards/Extensions';
import FaqSection from './sections/FaqSection/FaqSection';
import Newsletter from './sections/Newsletter/Newsletter';
import Footer from './sections/Footer/Footer';
import Modal from './components/ui/Modal/Modal';

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsModalOpen(true);
		}, 20000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			<div className="font-rubik bg-white w-full">
				{/* Czujnik na górze strony - odpala modal */}
				<div
					className="absolute -top-3 md:top-0 left-0 w-full h-10"
					onMouseEnter={() => {
						if (!('ontouchstart' in window)) {
							setIsModalOpen(true);
						}
						}}
					onClick={() => {
						if ('ontouchstart' in window) {
							setIsModalOpen(true);
						}
					}}
				/>
				
				<Header />
				<Hero />
				<Features />
				<Extensions />
				<FaqSection />
				<Newsletter />
				<Footer />
				<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			</div>
		</Router>
	);
}

export default App;
