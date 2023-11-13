import { useState } from 'react';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import { bodybuildingSlides } from './assets/bodybuilding/bodybuildingSlides';
import { airsoftSlides } from './assets/airsoft/airsoftSlides';


type TTopic = 'Musculação' | 'Vídeo Prático' | 'Airsoft';

function App() {
	const [topic, setTopic] = useState<TTopic>('Musculação')
	const pages = [{
		title: 'Musculação',
		onClick: () => setTopic('Musculação')
	},
	{
		title: 'Vídeo Prático',
		onClick: () => setTopic('Vídeo Prático')
	},
	{
		title: 'Airsoft',
		onClick: () => setTopic('Airsoft')
	}
];

	return (
		<>
			<Header title={ 'Desafios Táticos' } subtitle={ 'Aprimorando o condicionamento físico para o Airsoft' } pages={pages as never}/>
			<div style={{ marginInline: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{topic == 'Musculação' ? <Slideshow content={ bodybuildingSlides } />: null}
				{topic == 'Vídeo Prático' ? <div></div>: null}
				{topic == 'Airsoft' ? <Slideshow content={ airsoftSlides } />: null}
			</div>
		</>
	)
}

export default App