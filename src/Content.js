import { useState } from "react"
import { ItemList } from "./ItemList"
import { AddItem } from "./AddItem";

const Content = ({ items, handleCheck, handleDelete, spanStyle, setAndSaveItems }) => {
	const [name, setName] = useState('Pat')
	const [count, setCount] = useState(0);
	const [toggle, setToggle] = useState(true);

	const [newItem, setNewItem] = useState('')

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const addedItem = { id, checked: false, item };
		const listItems = [...items, addedItem];
		setAndSaveItems(listItems)
	}

    const handeSubmit = (e) => {
        e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem('');
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
				<AddItem 
					newItem={newItem}
					setNewItem={setNewItem}
					handleSubmit={handeSubmit}
				/>
				{items.length ? (
					<ItemList
						items={items}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				) : (
					<p style={{ marginTop: '1rem' }}>Shopping list is empty</p>
				)}
				<button className='btn' onClick={handleToggle}>Switch to intro</button>
			</main>
		)
	}
}

export default Content