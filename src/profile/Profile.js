import Proptypes from 'prop-types'

const Profile = (props) => {
  const {
    fullName = "user name",
    bio = "bio of the user ",
    profession = "profession of the user",
    handleName,
    children = "photo of the user",
  } = props;

  return (
    <div className="center" >
        
      <div>
      {children}
      </div>

      <div className="profile" style={{padding:"20px"}}>
      <h1 style={{color:"red"}}>{fullName}</h1>
      <h2 style={{color:"greenyellow"}}>{profession}</h2>
      <p>{bio}</p>
      </div>

      <button onClick={handleName ? () => handleName(fullName):()=>alert("no function")}>Contact me</button>

    </div>
  );
};

Profile.propTypes={
  fullName:Proptypes.string.isRequired,
  bio:Proptypes.string.isRequired,
  profession:Proptypes.string.isRequired,
  handleName:Proptypes.func.isRequired,
  children:Proptypes.element.isRequired
}


export default Profile;