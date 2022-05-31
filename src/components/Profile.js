import classes from "./Profile.module.css";

const Profile = (props) => {
  const scroll = () => {
    props.scroll();
  };

  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <h1>Caleb Diehl</h1>
        <h2>Web Development. Data Visualization. Design.</h2>
        <button className={classes["view-btn"]} onClick={scroll}>
          View Projects
        </button>
      </div>
      <img className={classes["profile-img"]} src="/profile.png" />
    </div>
  );
};

export default Profile;