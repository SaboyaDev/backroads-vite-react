type TitleProps = {
	first: string
	second: string
}

const Title = ({ first, second }: TitleProps) => {
	return (
		<div className='section-title'>
			<h2>
				{first} <span>{second}</span>
			</h2>
		</div>
	)
}
export default Title
