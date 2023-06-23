import Title from '../../util/Titile'
import Tour from './Tour'

import { tours } from '../../../data.js'

const Tours = () => {
	return (
		<section className='section' id='tours'>
			<Title first='featured' second='tours' />
			<div className='section-center featured-center'>
				{tours.map(tour => {
					return <Tour {...tour} />
				})}
			</div>
		</section>
	)
}
export default Tours
