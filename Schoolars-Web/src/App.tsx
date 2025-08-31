import { NewsCarousel } from './components/ui/NewsCarousel.js'
import { Button } from './components/ui/button.js'
import { News } from './mockedData/DataBase.js'
// import { Link } from 'react-router'

function App() {
	return (
		<>
			<div
				className='min-h-[150px] h-auto md:h-[15vh]'
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					flexWrap: 'wrap',
					marginTop: '5vh',
					columnGap: '20px',
				}}
			>
				<h1 className='croll-m-20 text-5xl text-center  font-bold tracking-tight text-balance'>
					Школьный портал технического творчества
				</h1>
				<Button className='w-[20vh] h-[5vh] text-[1.1rem]'>Войти</Button>
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<NewsCarousel News={News} />
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					alignItems: 'flex-start',
				}}
			>
				<h2 className='text-[2.2rem] scroll-m-20  pb-3 text-3xl font-semibold tracking-tight first:mt-0'>
					Календарь мероприятий
				</h2>
			</div>
		</>
	)
}

export default App
