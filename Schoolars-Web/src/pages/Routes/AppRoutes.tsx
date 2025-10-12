import { BrowserRouter, Route, Routes } from 'react-router'
import WelcomePage from '../WelcomePage'
import LoginPage from '../LoginPage'
import ProfilePage from '../ProfilePage'
const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WelcomePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/test' element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	)
}
export default AppRoutes
