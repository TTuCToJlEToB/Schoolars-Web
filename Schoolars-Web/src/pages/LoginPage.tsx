import LoginCard from './../components/ui/LoginCard'

const LoginPage = () => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '20vh',
			}}
		>
			<h1 className='croll-m-20 text-5xl text-center mb-[10vh] font-bold tracking-tight text-balance'>
				Вход в аккаунт
			</h1>
			<LoginCard />
		</div>
	)
}

export default LoginPage
