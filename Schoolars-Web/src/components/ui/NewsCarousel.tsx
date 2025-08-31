import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

//@ts-ignore

export function NewsCarousel({ News }) {
	return (
		<Carousel
			className='relative w-[90%] h-[40vh] mb-13 mt-7'
			opts={{
				align: 'start',
				loop: true,
			}}
			style={{ alignContent: 'center' }}
		>
			<CarouselContent className=''>
				{[...News].map((part, index) => (
					<CarouselItem
						key={index}
						// className='basis-full '
					>
						<Card
							className=' min-w-[150px] min-h-[250px] max-h-[400px]'
							style={{ overflow: 'auto' }}
						>
							<CardContent className='flex items-center justify-center p-6 break-words min-h-[200px] max-h-[350px]'>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
									}}
								>
									<h2 className='text-[2.2rem] scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight first:mt-0'>
										{part.title}
									</h2>
									<p className='text-[1.4rem] leading-7 [&:not(:first-child)]:mt-8'>
										{part.body}
									</p>
								</div>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious
				className='h-16 px-8 rounded-full has-[>svg]:px-4'
				variant={'default'}
			/>
			<CarouselNext
				variant={'default'}
				className='h-16 px-8 rounded-full has-[>svg]:px-4'
			/>
		</Carousel>
	)
}
