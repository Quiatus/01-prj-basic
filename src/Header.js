const Header = (props) => { // this can be deconstructed into funct. components => instead of (props), we can use ({ title }) and then in the h1, we can omit props. 
  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  )
}

// if no value is send, this will be the defaul title
Header.defaultProps = {
  title: "Default title"
}

export default Header
