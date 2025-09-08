import { BrowserRouter, Route, Routes } from 'react-router'
import WelcomePage from '../WelcomePage'

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<WelcomePage />} />
			</Routes>
		</BrowserRouter>
	)
}
export default AppRoutes
