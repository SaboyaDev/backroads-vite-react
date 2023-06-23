import { pageLinks, socialLinks } from '../../data'
import PageLinks from '../util/links/PageLinks'

const Footer = () => {
	return (
		<footer className='section footer'>
			<PageLinks myType='footer' iconType={false} links={pageLinks} />
			<PageLinks myType='footer' iconType={true} links={socialLinks} />
			<p className='copyright'>
				copyright &copy; Backroads travel tours company
				<span id='date'></span> all rights reserved
			</p>
		</footer>
	)
}
export default Footer
