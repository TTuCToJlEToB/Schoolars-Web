import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const PersonalDataCard = () => {
	return (
		<section
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
				padding: '20px',
			}}
		>
			<Card
				style={{
					width: 'min(40vw, 500px)',
					height: 'min(30vh, 400px)',
					minWidth: '300px',
					minHeight: '250px',
				}}
			>
				<CardHeader>
					<CardDescription style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}>Личная информация</CardDescription>
					<CardAction>
						<CardTitle style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>9 Б</CardTitle>
					</CardAction>
				</CardHeader>
				<CardContent
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: 'calc(100% - 80px)',
					}}
				>
					<CardTitle style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}>Иванов И.И.</CardTitle>
				</CardContent>
			</Card>
		</section>
	)
}
export default PersonalDataCard
