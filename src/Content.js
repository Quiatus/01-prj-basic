import { useState } from "react";

const Content = () => {
	const [name, setName] = useState('Pat')
	const [count, setCount] = useState(0);

	const spanStyle = {
		color: 'steelblue',
		fontWeight: 'bold'
	}

	const handleName = () => {
		const names = ['Bob', 'Pat', 'Josh', 'Mick'];
		const int = Math.floor(Math.random() * 4);
		setName(names[int]);
	}

	const handleCounter = () => {
		setCount(count + 1)
	}

	return (
		<main>
			<p>First React app by <span style={spanStyle}>{name}</span>. Count: <span style={spanStyle}>{count}</span></p>
			<div className="buttons">
				<button className='btn' onClick={handleName}>Change name</button>
				<button className='btn' onClick={handleCounter}>Count</button>
			</div>
			
		</main>
	)
}

export default Content