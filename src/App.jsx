import "./App.css";
import Header from "./assets/components/header/header";
import Main from "./assets/components/main/main";
import Section1 from "./assets/components/main/section1/section1";
import Footer from "./assets/components/footer/footer";

function App() {
  return (
    <>
      <div className="header_bg">
        <Header />
        <Section1 />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
