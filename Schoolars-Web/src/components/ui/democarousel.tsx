import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

export function CarouselDemo() {
	return (
		<div className='relative w-[75vw] h-[70vh]'>
			<Carousel
				opts={{
					align: 'start',
				}}
				className='w-full h-full'
				style={{ alignContent: 'center' }}
			>
				<CarouselContent className='h-full'>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index} className='basis-full h-full'>
							<div className='p-1 h-full'>
								<Card className='h-full min-w-[150px] min-h-[300px] max-h-[1000px]'>
									<CardContent className='flex items-center justify-center p-6 h-full min-h-[300px] max-h-[1000px]'>
										<span className='text-3xl font-semibold'>{index + 1}</span>
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
