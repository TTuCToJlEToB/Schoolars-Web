import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { type NewsCarouselParams } from '@/types/News'
import Autoplay from 'embla-carousel-autoplay'

export function NewsCarousel({ News }: NewsCarouselParams) {
	return (
		<Carousel
			className='w-[90%] h-[40vh] mb-13 mt-7'
			plugins={[
				Autoplay({
					delay: 9000,
				}),
			]}
			opts={{
				align: 'start',
				loop: true,
			}}
		>
			<CarouselContent>
				{[...News].map((part, index) => (
					<CarouselItem key={index}>
						<Card
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								minHeight: '200px',
								maxHeight: '1000px',
								minWidth: '150px',
								overflow: 'auto',
							}}
						>
							<CardContent>
								<h2 className='text-[2.2rem] scroll-m-20 border-b pb-3 text-3xl font-semibold tracking-tight first:mt-0'>
									{part.title}
								</h2>
								<p className='text-[1.4rem] leading-7 [&:not(:first-child)]:mt-8'>{part.body}</p>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	)
}
