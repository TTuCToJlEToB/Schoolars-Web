import { CarouselDemo } from './components/ui/democarousel.js'
import { News } from './mockedData/DataBase.js'
function App() {
	return (
		<div
			style={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}
		>
			<CarouselDemo News={News} />
		</div>
	)
}

export default App
