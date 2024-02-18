import { useState, useEffect } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
    // "inline style"
	const spanStyle = {
		color: 'steelblue',
		fontWeight: 'bold'
	}

    const API_URL = 'http://localhost:3500/items';
	const [items, setItems] = useState( [] );
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw Error('Unable to receive data!');
                const listItems = await response.json();
                setItems(listItems);
                setFetchError(null)
            } catch (err) {
                setFetchError(err.message)
            } finally {
                setIsLoading(false);
            }
        }

        (async () => await fetchItems())()  // eventually: fetchItems()
 
    }, [])

    // prop drilling = passing function to child components
    const handleCheck = (id) => {
		const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
		setItems(listItems);
	}

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
	}

    return (
        <div className="App">
            <Header title="Shopping list"/>
            <main>
                {isLoading && <p>Loading items...</p>}
                {!isLoading && <Content 
                    fetchError={fetchError}
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    setItems={setItems}
                    spanStyle={spanStyle}
                />}
            </main>
            <Footer 
                length={items.length}
                spanStyle={spanStyle}
            />
        </div>
    );
}

export default App;
