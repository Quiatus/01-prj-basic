import { useState } from "react"
import { ItemList } from "./ItemList"
import { AddItem } from "./AddItem";
import { SearchItem } from "./SearchItem";

const Content = ({ fetchError, items, handleCheck, handleDelete, setItems }) => {
	const [newItem, setNewItem] = useState('');
	const [search, setSearch] = useState('');

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const addedItem = { id, checked: false, item };
		const listItems = [...items, addedItem];
		setItems(listItems)
	}

    const handeSubmit = (e) => {
        e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		setNewItem('');
    }

	if (items.length) {
		return (
			<>
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
				
			</>
		)
	} else {
		return (
			<>
				<AddItem 
					newItem={newItem}
					setNewItem={setNewItem}
					handleSubmit={handeSubmit}
				/>
				{fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
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
			</>
		)
	}
}

export default Content