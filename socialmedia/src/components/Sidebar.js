import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpg";
import JSONDATA from './Mock_Data.json';
import {useState} from 'react';

function Sidebar() {
  const [searchTerm, setSearchTerm] = useState("")
  return (

    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="boba.gal"
          caption="Gulperi Kopru"
          urlText="Switch"
          iconSize="big"
          image={image}
        />
        <Suggestions />
        <div className="search">
          {/* <img className="searchIcon" src={searchIcon} alt="search icon" /> */}
          <input className="boxed" type="text" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}} />
          {JSONDATA.filter((val)=> {
            if(searchTerm == "") {

            } else if (val.username.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            }
          }).map((val,key)=> {
            return <div className="user" key={key}>{val.username}</div>
          })}
          {/* <button className="searchText" onClick={handleSubmit}>Search</button> */}
        </div>
        <Footer />
      </div>

    </Sticky>

  );
}

export default Sidebar;
