const Content = () => {
  return (
    <main>
        <p>First React app by {handleName()}</p>
    </main>
  )
}

const handleName = () => {
    const names = ['Bob', 'Pat', 'Josh', 'Mick'];
    const int = Math.floor(Math.random() * 4);
    return names[int];
}

export default Content