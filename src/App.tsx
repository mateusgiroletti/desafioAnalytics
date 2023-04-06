import Aside from "./components/Aside";
import Main from "./components/Main";
import Modal from "./components/Modal";
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

            <Modal open={true} />

        </GameProvider>
    );
}

export default App;
