import "./section2.css";
import icons from "../../../icon";

function Section2() {
  return (
    <section className="section2">
      <div className="trusted_by">
        <h3>Trusted by 5,000+ Companies Worldwide</h3>
        <ul>
          <a href="">
            <img src={icons.company.google} alt="" />
          </a>
          <a href="">
            <img src={icons.company.netflix} alt="" />
          </a>
          <a href="">
            <img src={icons.company.airbnb} alt="" />
          </a>
          <a href="">
            <img src={icons.company.amazon} alt="" />
          </a>
          <a href="">
            <img src={icons.company.facebook} alt="" />
          </a>
          <a href="">
            <img src={icons.company.grab} alt="" />
          </a>
        </ul>
      </div>
      <div className="summary">
        <h2>
          What is <span>Skilline?</span>
        </h2>
        <p>
          Skilline is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <div className="teaching">
          <div
            style={{
              background: `url(${icons.instructor}) no-repeat center`,
            }}
          >
            <h3>FOR INSTRUCTORS</h3>
            <button>Start a class today</button>
          </div>
          <div
            style={{
              background: `url(${icons.student}) no-repeat center`,
            }}
          >
            <h3>FOR STUDENTS</h3>
            <button>Enter access code</button>
          </div>
        </div>
      </div>
      <div className="overview">
        <div>
          <h2>
            Everything you can do in a physical classroom,
            <span> you can do with Skilline</span>
          </h2>
          <p>
            Skilline’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
          <a href="">Learn more</a>
        </div>
        <img src={icons.overview} alt="" />
      </div>
    </section>
  );
}

export default Section2;
