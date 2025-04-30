import icons from "../../../../icon";

function Card1() {
  return (
    <div className="card">
      <div className="cardtext">
        <h3>
          <span>Tools</span> For Teachers And Learners
        </h3>
        <p>
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>
      <img src={icons.card1} alt="" />
    </div>
  );
}

export default Card1;
