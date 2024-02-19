import { useState, useEffect } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { apiRequest } from "./apiRequest";

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

        fetchItems()
 
    }, [])

    // prop drilling = passing function to child components
    const handleCheck = async (id) => {
		const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
		setItems(listItems);

        const myItem = listItems.filter((item) => item.id === id);
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application-json'
            },
            body: JSON.stringify( {checked: myItem[0].checked} )
        }
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, updateOptions);
        if (result) setFetchError(result);
	}

	const handleDelete = async (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);

        const deleteOptions = { method: 'DELETE' }
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequest(reqUrl, deleteOptions);
        if (result) setFetchError(result);
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
                    API_URL={API_URL}
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
