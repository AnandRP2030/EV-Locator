import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./Components/Navbar/navbar";
import Container from "react-bootstrap/esm/Container";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <div className="ev-app">
        <NavbarComponent />
        <Home />
      </div>
    </>
  );
}

export default App;
