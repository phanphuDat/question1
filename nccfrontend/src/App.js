import "./App.css"
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
        <SideBar />
      <div className="page">
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
