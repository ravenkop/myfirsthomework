import "../styles/navigation.scss";
import Menu from "./Menu";
import logo from "../images/instagramLogo2.PNG";

// import searchIcon from "../images/searchIcon.png";
// import JSONDATA from './Mock_Data.json';
// import {useState} from 'react';


function handleSubmit(e) {
  e.preventDefault();
}



function Navigation() {
  // const [searchTerm, setSearchTerm] = useState("")
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo" />
        {/* <div className="search"> */}
          {/* <img className="searchIcon" src={searchIcon} alt="search icon" /> */}
          {/* <input className="boxed" type="text" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}} />
          {JSONDATA.filter((val)=> {
            if(searchTerm == "") {

            } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((val,key)=> {
            return <div className="user" key={key}>{val.username}</div>
          })}
          <button className="searchText" onClick={handleSubmit}>Search</button> */}
        {/* </div> */}
        <Menu />
      </div>
    </div>
  );
}

export default Navigation;
