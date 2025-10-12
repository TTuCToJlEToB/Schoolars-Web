import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router'

const Footer = () => {
	return (
		<footer>
			<div
				style={{
					position: 'fixed',
					bottom: '20px',
					left: '50%',
					transform: 'translateX(-50%)',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-around',
					border: '1px solid black',
					width: '90%',
					maxWidth: '800px',
					minWidth: '300px',
					backgroundColor: 'white',
					zIndex: 1000,
					borderRadius: '16px',
					boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)',
					padding: '12px 24px',
					// 	'@media (max-width: 768px)': {
					// 		width: '95%',
					// 		padding: '10px 16px',
					// 		borderRadius: '12px',
					// 	},
					// 	'@media (max-width: 480px)': {
					// 		width: '98%',
					// 		padding: '8px 12px',
					// 		bottom: '10px',
					// 	},
				}}
			>
				<NavigationMenu viewport={false}>
					<NavigationMenuList
						style={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							gap: '16px',
						}}
					>
						<NavigationMenuItem>
							<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
								<Link to='/'> Профиль</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
								<Link to='/'> Оценки</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
								<Link to='/'>...</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</footer>
	)
}
export default Footer
