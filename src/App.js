import { useState } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {

    // "inline style"
	const spanStyle = {
		color: 'steelblue',
		fontWeight: 'bold'
	}

	const [items, setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")));

	const setAndSaveItems = (newItems) => {
		setItems(newItems);
		localStorage.setItem('shoppingList', JSON.stringify(newItems));
	}

    // prop drilling = passing function to child components
    const handleCheck = (id) => {
		const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
		setAndSaveItems(listItems);
	}

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	}

    return (
        <div className="App">
            <Header title="Shopping list"/>
            
            <Content 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
				setAndSaveItems={setAndSaveItems}
                spanStyle={spanStyle}
            />
            <Footer 
                length={items.length}
                spanStyle={spanStyle}
            />
        </div>
    );
}

export default App;
