import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import type { AuthForm } from '@/types/Authorization'
import { useFormik } from 'formik'

const LoginCard = () => {
	const formik = useFormik<AuthForm>({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: (values) => {
			alert(values)
		},
	})

	return (
		<Card className='w-full max-w-screen-lg'>
			<CardHeader>
				<CardTitle>Войдите в свою учетную запись</CardTitle>
				<CardDescription>Введите свой адрес электронной почты ниже, чтобы войти в свою учетную запись</CardDescription>
				{/* <CardAction>
					<Button variant='link'>Sign Up</Button>
				</CardAction> */}
			</CardHeader>
			<CardContent>
				<form onSubmit={formik.handleSubmit}>
					<div className='flex flex-col gap-6'>
						<div className='grid gap-2'>
							<Label htmlFor='email'>Почта</Label>
							<Input
								id='email'
								name='email'
								type='email'
								onChange={formik.handleChange}
								value={formik.values.email}
								placeholder='mymail@example.com'
								required
							/>
						</div>
						<div className='grid gap-2'>
							<div className='flex items-center'>
								<Label htmlFor='password'>Пароль</Label>
								{/* <a href='/' className='ml-auto inline-block text-sm underline-offset-4 hover:underline'>
									Забыли пароль?
								</a> */}
							</div>
							<Input
								id='password'
								name='password'
								type='password'
								onChange={formik.handleChange}
								value={formik.values.password}
								required
							/>
							{/* {formik.errors.password ? (
								<div>{formik.errors.password}</div>
							) : null} */}
						</div>
					</div>
				</form>
			</CardContent>
			<CardFooter className='flex-col gap-2'>
				<Button type='submit' className='w-full'>
					Авторизоваться
				</Button>
				{/* <Button variant='outline' className='w-full'>
					Login with Google
				</Button> */}
			</CardFooter>
		</Card>
	)
}

export default LoginCard
