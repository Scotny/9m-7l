import "./section3.css";
import Card1 from "./card1/card1";
import Card2 from "./card2/cards";
import Card3 from "./card3/card3";
import Card4 from "./card4/card4";

function Section3() {
  return (
    <section className="section3">
      <h2>
        Our <span>Features</span>
      </h2>
      <p>
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className="cards">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </section>
  );
}

export default Section3;
