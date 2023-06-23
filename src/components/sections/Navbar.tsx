import PageLinks from '../util/links/PageLinks'
import { pageLinks, socialLinks } from '../../data.js'
import Logo from '/src/assets/images/logo.svg'

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={Logo} className='nav-logo' alt='backroads' />
					<button type='button' className='nav-toggle' id='nav-toggle'>
						<i className='fas fa-bars'></i>
					</button>
				</div>

				<PageLinks myType='nav' iconType={false} links={pageLinks} />
				<PageLinks myType='nav' iconType={true} links={socialLinks} />
			</div>
		</nav>
	)
}
export default Navbar
