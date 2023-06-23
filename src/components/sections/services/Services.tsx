import Title from '../../util/Titile'
import { services } from '../../../data.js'
import Service from './Service'

const Services = () => {
	return (
		<section className='section services' id='services'>
			<Title first='our' second='services' />
			<div className='section-center services-center'>
				{services.map(service => {
					return <Service key={service.id} {...service} />
				})}
			</div>
		</section>
	)
}

export default Services
