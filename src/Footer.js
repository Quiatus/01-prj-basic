const Footer = ({ length, spanStyle }) => {
    return (
        <footer>
            <span style={spanStyle}>{ length }</span><p> { length === 1 ? "item" : "items"} in the list </p>
        </footer>
    )
}

export default Footer