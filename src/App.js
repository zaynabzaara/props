import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import PorfilPhoto from "./image/profilPhoto.jpg";

const handleName = (name) => {
  alert(name);
};
const bio =
 "« La sagesse, c'est d'avoir des rêves suffisamment grands pour ne pas les perdre de vue lorsqu'on les poursuit. » - Oscar Wilde"
const style = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  marginTop: "5%",
  objectFit: "cover",
  objectPosition: "0 -8px",
};

function App() {
  return (
    <React.Fragment>
      <Profile
        fullName="ZAARA Zaynab"
        bio={bio}
        profession="FullStack js developer"
        handleName={handleName}
      >
        <img src={PorfilPhoto} alt="logo" style={style} />
      </Profile>
      </React.Fragment>
    
  );
}

export default App;
