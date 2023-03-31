import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="main-container">
            <Aside />
            <Main />
            <Nav />
        </div>
    );
}

export default App;
