import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

//@ts-ignore

export function CarouselDemo({ News }) {
	return (
		<div className='relative w-[75vw] h-[70vh]'>
			<Carousel
				opts={{
					align: 'start',
					loop: true,
				}}
				className='w-full h-full'
				style={{ alignContent: 'center' }}
			>
				<CarouselContent className='h-full'>
					{[...News].map((part, index) => (
						<CarouselItem key={index} className='basis-full h-full'>
							<div className='p-1 h-full'>
								<Card className='h-full min-w-[150px] min-h-[300px] max-h-[1000px]'>
									<CardContent className='flex items-center justify-center p-6 h-full min-h-[300px] max-h-[1000px]'>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
											}}
										>
											<h2 className='text-[clamp(10px,2rem,4.5rem)] scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight first:mt-0'>
												{part.title}
											</h2>
											<p className='text-[clamp(8px,1rem,3rem)] leading-7 [&:not(:first-child)]:mt-8'>
												{part.body}
											</p>
										</div>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
