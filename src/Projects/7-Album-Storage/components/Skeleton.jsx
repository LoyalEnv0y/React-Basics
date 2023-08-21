import classNames from 'classnames';

function Skeleton({ times, className }) {
	const outerClassNames = classNames(
		'relative',
		'overflow-hidden',
		'bg-gray-200',
		'rounded',
		'mb-2.5',
		className
	);
	const innerClassNames = classNames(
		'absolute',
		'animate-shimmer',
		'inset-0',
		'-translate-x-full',
		'bg-gradient-to-r',
		'from-gray-200',
		'via-white',
		'to-gray-200'
	);

	const boxes = Array.from({ length: times });

	return (
		<>
			{boxes.map((_, i) => (
				<div key={i} className={outerClassNames}>
					<div className={innerClassNames} />
				</div>
			))}
		</>
	);
}

export default Skeleton;
