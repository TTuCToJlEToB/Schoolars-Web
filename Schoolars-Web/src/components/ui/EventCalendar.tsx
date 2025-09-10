import { Card, CardContent, CardTitle } from '@/components/ui/card'

type EventType = { date: string; event: string }
type EventCalendarParams = { Events: EventType[] }

export function EventCalendar({ Events }: EventCalendarParams) {
	return (
		<div
			className='mb-2 gap-4'
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				alignItems: 'flex-start',
				paddingLeft: '5vw',
			}}
		>
			<h2 className='text-[2.2rem] scroll-m-20 pb-3 text-3xl font-semibold tracking-tight first:mt-0'>
				Календарь мероприятий
			</h2>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: 'row',
					justifyContent: 'space-evenly',
					width: '90%',
					height: '32vh',
					columnGap: '3px',
					rowGap: '13px',
					overflow: 'auto',
				}}
			>
				{Events.map(event => (
					<Card className='flex items-center justify-center w-[45%]'>
						<CardTitle>{event.date}</CardTitle>
						<CardContent>{event.event}</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
