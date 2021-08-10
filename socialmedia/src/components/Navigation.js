import "../styles/navigation.scss";
import Menu from "./Menu";
import logo from "../images/instagramLogo2.PNG";
import SearchBar from "./SearchBar";
// import searchIcon from "../images/searchIcon.png";


function handleSubmit(e) {
  e.preventDefault();
}



function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo" />
        <div className="search">
          {/* <img className="searchIcon" src={searchIcon} alt="search icon" /> */}
          <input className="boxed" type="text" />
          <button className="searchText" onClick={handleSubmit}>Search</button>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
