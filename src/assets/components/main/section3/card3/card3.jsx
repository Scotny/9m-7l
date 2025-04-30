import icons from "../../../../icon";

function Card3() {
  return (
    <div className="card card3">
      <div className="cardtext">
        <h3>
          <span>Class Management</span> Tools for Educators
        </h3>
        <p>
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>
      <img src={icons.card3} alt="" />
    </div>
  );
}

export default Card3;
