import "./section1.css";

function Section1() {
  return (
    <section className="section1 container">
      <h1>
        <span>Studying</span> Online is now <br />
        much easier
      </h1>
      <p>
        Skilline is an interesting platform that will teach <br /> you in more
        an interactive way
      </p>
      <div className="section1_btn">
        <button className="join">Join for free</button>
        <button className="play">▶</button>
        <a href="">Watch how it works</a>
      </div>
    </section>
  );
}

export default Section1;
