const Header = () => {
  return (
    <div id="headerComp">
      <div
        id="upperPart"
        style={{
          backgroundImage: "url(/assets/images/back1.jpg)",
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
        <div id="message">
          <button id="button">Message</button> <span>...</span>
        </div>
      </div>
      <div id="lowerPart">
        <div id="leftSide">
          <p id="name">Luis Antonio Canettoli Ordoñez</p> <span>. 3rd</span>
          <p id="jobTitle">
            MERN Full Stack Developer | Teaching Assistant @ Strive School
          </p>
          <ul>
            <li>address</li>
            <li>.</li>
            <li>number of connections</li>
            <li>.</li>
            <li>
              <a href="https://google.com">Contact info</a>
            </li>
          </ul>
        </div>
        <div id="rightSide">
          <img
            src="/assets/images/strivelogo.jpg"
            alt="company logo"
            height="32px"
          />
          <p>Strive School</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
