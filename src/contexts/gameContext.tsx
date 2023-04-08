import { ReactNode, createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type GameProviderProps = {
    children: ReactNode;
}

type GameContextData = {
    historic: HistoricItem[];
    highScore: number;
    nickname: string;
    modal: boolean;
    levelGame: string;
    resetAllData: () => void;
    resetHistoric: () => void;
    toggleModal: () => void;
    handleNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
    setHistoric: () => void;
    setHighScore: () => void;
    setLevelGame: () => void;
}

type HistoricItem = {
    guessedColor: string;
    correctColor: string;
    timeScore: number;
    player?: string;
}

export const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }: GameProviderProps) {
    const [historic, setHistoric] = useLocalStorage<HistoricItem[]>(
        "historic",
        []
    );

    const [highScore, setHighScore] = useLocalStorage<number>(
        "highScore",
        0
    );

    const [nickname, setNickname] = useLocalStorage<string>(
        "nickname",
        ""
    );

    const [levelGame, setLevelGame] = useLocalStorage<string>(
        "level_game",
        "2"
    );

    const [modal, setModal] = useState(false);

    function handleNickname(e: React.ChangeEvent<HTMLInputElement>) {
        setNickname(e.target.value);
    }

    function resetHistoric() {
        setHistoric([]);
    }

    function resetAllData() {
        setHistoric([]);
        setHighScore(0);
    }

    function toggleModal() {
        setModal(!modal);
    }

    return (
        <GameContext.Provider value={
            {
                setHistoric,
                historic,
                resetAllData,
                highScore,
                setHighScore,
                resetHistoric,
                nickname,
                handleNickname,
                modal,
                toggleModal,
                levelGame,
                setLevelGame
            }
        }>
            {children}
        </GameContext.Provider>
    );
}