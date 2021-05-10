const Header = () => {
  return (
    <div id="headerComp">
      <div
        id="upperPart"
        style={{
          backgroundImage: "url(./assets/images/back1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          id="profilePic"
          src="/assets/images/profilepic.jpg"
          alt="rofile of me"
        />
      </div>
      <div id="lowerPart">
        <div id="leftSide">
          <h3>Luis Antonio Canettoli Ordoñez</h3> <span>. 3rd</span>
          <p>MERN Full Stack Developer | Teaching Assistant @ Strive School</p>
          <ul>
            <li>address</li>
            <li>number of connections</li>
            <li>contact info</li>
          </ul>
        </div>
        <div id="rightSide">
          <p>sdfssgsdgfsdfsdf</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
