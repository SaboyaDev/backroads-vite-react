type LinksWithText = {
	id: number
	href: string
	text: string
}

type LinksWithIcons = {
	id: number
	href: string
	icon: string
}

type PageLinksProps = {
	myType: string
	iconType: boolean
	links: (LinksWithText | LinksWithIcons)[]
}

const PageLinks = ({ myType, iconType, links }: PageLinksProps) => {
	const parentClass =
		myType === 'nav' && iconType === false
			? 'nav-links'
			: myType === 'nav' && iconType === true
			? 'nav-icons'
			: myType === 'footer' && iconType === false
			? 'footer-links'
			: myType === 'footer' && iconType === true
			? 'footer-icons'
			: ''
	const childClass =
		myType === 'nav' && iconType === false
			? 'nav-link'
			: myType === 'nav' && iconType === true
			? 'nav-icon'
			: myType === 'footer' && iconType === false
			? 'footer-link'
			: myType === 'footer' && iconType === true
			? 'footer-icon'
			: ''

	return (
		<ul className={parentClass}>
			{links.map(link => {
				if ('text' in link) {
					const { id, href, text } = link as LinksWithText
					return (
						<li key={id}>
							<a className={childClass} href={href}>
								{text}
							</a>
						</li>
					)
				} else {
					const { id, href, icon } = link as LinksWithIcons
					return (
						<li key={id}>
							<a className={childClass} href={href}>
								<i className={icon}></i>
							</a>
						</li>
					)
				}
			})}
		</ul>
	)
}
export default PageLinks
