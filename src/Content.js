import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
	const [name, setName] = useState('Pat')
	const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(true);
	const [items, setItems] = useState([
		{
			id: 1,
			checked: false,
			item: "Item 1"
		},
		{
			id: 2,
			checked: false,
			item: "Item 2"
		},
		{
			id: 3,
			checked: false,
			item: "Item 3"
		}
	])

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

	const handleToggle = () => {
		toggle ? setToggle(false) : setToggle(true)
	}

	if (toggle) {
		return (
			<main>
				<p>First React app by <span style={spanStyle}>{name}</span>. Count: <span style={spanStyle}>{count}</span></p>
				<div className="buttons">
					<button className='btn' onClick={handleName}>Change name</button>
					<button className='btn' onClick={handleCounter}>Count</button>
				</div>
				<button className='btn' onClick={handleToggle}>Switch to list</button>
			</main>
		)
	} else {
		return (
			<main>
				<ul>
					{items.map((item) => (
						<li className="item" key={item.id}>
							<input type="checkbox" checked={item.checked}/>
							<label>{item.item}</label>
							<FaTrashAlt role="button" tabIndex="0" />
						</li>
					))}
				</ul>
				<div className="buttons">
					<button className='btn' onClick={handleToggle}>Switch to intro</button>
				</div>
			</main>
		)
	}
}

export default Content