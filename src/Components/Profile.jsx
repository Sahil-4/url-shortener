
function Profile({ logOut }) {
  return (
    <div className="profile">
      <h3 className="text pointer">Your Name</h3>
      <button className="text pointer" onClick={logOut}>
        Deactivate Account
      </button>
      <button className="text pointer" onClick={logOut}>
        Log out
      </button>
    </div>
  );
}

export default Profile;
