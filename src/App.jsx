import "./App.css";
import Header from "./assets/components/header/header";
import Main from "./assets/components/main/main";
import Section1 from "./assets/components/main/section1/section1";
import Footer from "./assets/components/footer/footer";
import headerbg from "./assets/images/header-bg.svg";

function App() {
  return (
    <>
      <div
        style={{
          background: `url(${headerbg}) no-repeat center center/cover`,
        }}
        className="header_bg"
      >
        <Header />
        <Section1 />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
