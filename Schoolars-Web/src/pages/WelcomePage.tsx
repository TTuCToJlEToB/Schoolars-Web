import { NewsCarousel } from '@/components/ui/NewsCarousel.js'
import { Button } from '@/components/ui/button.js'
import { News } from '@/mockedData/DataBase.js'
import { Events } from '@/mockedData/DataBase.js'
// import { Link } from 'react-router'
import { EventCalendar } from '@/components/ui/EventCalendar'
const WelcomePage = () => {
	return (
		<>
			<div
				className='h-auto py-4 gap-6'
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					marginTop: '5vh',
				}}
			>
				<h1 className='croll-m-20 text-5xl text-center  font-bold tracking-tight text-balance'>
					Школьный портал технического творчества
				</h1>
				<Button className='min-w-[20vh] min-h-[5vh] text-[1.1rem]'>
					Войти
				</Button>
			</div>
			<EventCalendar Events={Events} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<NewsCarousel News={News} />
			</div>
		</>
	)
}

export default WelcomePage
