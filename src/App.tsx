import Aside from "./components/Aside";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { GameProvider } from "./contexts/gameContext";

function App() {

    return (
        <GameProvider>
            <div className="main-container">
                <Aside />
                <Main />
                <Nav />
            </div>
        </GameProvider>
    );
}

export default App;
