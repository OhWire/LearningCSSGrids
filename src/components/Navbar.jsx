import "../App.css"

function Navbar() {
    return (
      <>
          <div className="Navbar">
            <div className="Logo">
              Logo 
            </div>
            <div className="Navitems">
            <ul >
              <li className="Home"><a href="#">Home</a></li>
              <li className="About"><a href="#">About</a></li>
              <li className="Menu"><a href="#">Menu</a></li>
              <li className=" Reservations"><a href="#">Reservations</a></li>
              <li className=" Order"><a href="#">Order Online</a></li>
              <li className=" Login"><a href="#">Login</a></li>
            </ul>
            </div>
        </div>
      </>
    );
  }

  export default Navbar;