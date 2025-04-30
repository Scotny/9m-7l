import icons from "../../../../icon";

function Card4() {
  return (
    <div className="card">
      <img src={icons.card4} alt="" />
      <div className="cardtext">
        <h3>
          One-on-One <span>Discussions</span>
        </h3>
        <p>
          Teachers and teacher assistants can talk with students privately
          without leaving the Zoom environment.
        </p>
      </div>
    </div>
  );
}

export default Card4;
