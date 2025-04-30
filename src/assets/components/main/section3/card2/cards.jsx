import icons from "../../../../icon";

function Card2() {
  return (
    <div className="card">
      <img src={icons.card2} alt="" />
      <div className="cardtext">
        <h3>
          Assessments, <span>Quizzes</span>, Tests
        </h3>
        <p>
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
  );
}

export default Card2;
