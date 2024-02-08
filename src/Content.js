import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
	// "inline style"
	const spanStyle = {
		color: 'steelblue',
		fontWeight: 'bold'
	}

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

	const handleCheck = (id) => {
		const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
		setItems(listItems);
		localStorage.setItem('shoppingList', JSON.stringify(listItems));
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

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem('shoppingList', JSON.stringify(listItems));
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
				{items.length ? (
					<ul>
						{items.map((item) => (
							<li className="item" key={item.id}>
								<input 
									type="checkbox" 
									checked={item.checked}
									onChange={() => handleCheck(item.id)}
								/>
								<label
									onDoubleClick={() => handleCheck(item.id)}
									style = {(item.checked) ? { textDecoration:'line-through' } : null}
								>{item.item}</label>
								<FaTrashAlt 
									role="button" 
									tabIndex="0" 
									onClick={() => handleDelete(item.id)}
								/>
							</li>
						))}
					</ul>
				) : (
					<p style={{ marginTop: '1rem' }}>Shopping list is empty</p>
				)}
				<button className='btn' onClick={handleToggle}>Switch to intro</button>
			</main>
		)
	}
}

export default Content