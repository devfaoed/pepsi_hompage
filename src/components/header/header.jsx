import "./header.css"

const Header = () => {
    return(
        <div className="pepsi">
            <nav className="navbar">
            <div>
                <img src="/image/pepsi.jpeg" alt="" className="navbarImage"/>
            </div>

            <div className="navbarItem">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Help</li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Header