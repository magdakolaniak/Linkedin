const Header = (props) => {
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
          src={props.profileData.image}
          alt={"rofile of " + props.profileData.name}
        />
        <div id="message">
          <button id="button">Message</button> <span>...</span>
        </div>
      </div>
      <div id="lowerPart">
        <div id="leftSide">
          <p id="name">
            <span style={{ marginRight: "10px" }}>
              {props.profileData.name}
            </span>
            <span>{props.profileData.surname}</span>
          </p>
          <span>. 3rd</span>
          <br></br>
          <p id="jobTitle">{props.profileData.bio}</p>
          <ul>
            <li>{props.profileData.area}</li>
            <li>.</li>
            <li>150 connections</li>
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
