import { useState } from 'react';
import Header from './components/Header';
import { Video } from './components/Video';
import { paths } from './assets/video/paths';
import Slideshow from './components/Slideshow';
import { airsoftSlides } from './assets/airsoft/airsoftSlides';
import { bodybuildingSlides } from './assets/bodybuilding/bodybuildingSlides';


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
			<Header
				title={ 'Desafios Táticos' }
				subtitle={ 'Aprimorando o condicionamento físico para o Airsoft' }
				pages={ pages as never }
			/>

			<div style={{ marginInline: '5%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				{topic == 'Musculação' ? <Slideshow content={ bodybuildingSlides } />: null}
				{topic == 'Vídeo Prático' ? <Video content={ paths } />: null}
				{topic == 'Airsoft' ? <Slideshow content={ airsoftSlides } />: null}
			</div>
		</>
	)
}

export default App