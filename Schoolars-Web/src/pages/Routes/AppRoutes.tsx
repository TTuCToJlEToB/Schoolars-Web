import { BrowserRouter, Route, Routes } from 'react-router'
import WelcomePage from '../WelcomePage'
import LoginPage from '../LoginPage'

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WelcomePage />} />
				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	)
}
export default AppRoutes
