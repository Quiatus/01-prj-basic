import { useState } from "react"
import { ItemList } from "./ItemList"
import { AddItem } from "./AddItem";
import { SearchItem } from "./SearchItem";

const Content = ({ items, handleCheck, handleDelete, setAndSaveItems }) => {
	// const [name, setName] = useState('Pat')
	// const [count, setCount] = useState(0);
	// const [toggle, setToggle] = useState(false);

	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');

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

	// const handleName = () => {
	// 	const names = ['Bob', 'Pat', 'Josh', 'Mick'];
	// 	const int = Math.floor(Math.random() * 4);
	// 	setName(names[int]);
	// }

	// const handleCounter = () => {
	// 	setCount(count + 1)
	// }

	// const handleToggle = () => {
	// 	toggle ? setToggle(false) : setToggle(true)
	// }

	// if (toggle) {
	// 	return (
	// 		<main>
	// 			<p>First React app by <span style={spanStyle}>{name}</span>. Count: <span style={spanStyle}>{count}</span></p>
	// 			<div className="buttons">
	// 				<button className='btn' onClick={handleName}>Change name</button>
	// 				<button className='btn' onClick={handleCounter}>Count</button>
	// 			</div>
	// 			<button className='btn' onClick={handleToggle}>Switch to list</button>
	// 		</main>
	// 	)
	// } else {
	// <button className='btn' onClick={handleToggle}>Switch to intro</button> 

	if (items.length) {
		return (
			<main>
				<AddItem 
					newItem={newItem}
					setNewItem={setNewItem}
					handleSubmit={handeSubmit}
				/>
				<SearchItem 
					search={search}
					setSearch = {setSearch}
				/>
				<ItemList
					items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
					handleCheck={handleCheck}
					handleDelete={handleDelete}
				/>
				
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
				{items.length ? (
					<SearchItem 
						search={search}
						setSearch = {setSearch}
					/>
				) : null}
			</main>
		)
	}
}

export default Content