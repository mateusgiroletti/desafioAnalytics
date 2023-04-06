import { ReactNode, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type GameProviderProps = {
    children: ReactNode;
}

type GameContextData = {
    historic: HistoricItem[];
    resetAllData: () => void
}

type HistoricItem = {
    guessedColor: string;
    correctColor: string;
    timeScore: number;
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

    function resetHistoric() {
        setHistoric([]);
    }

    function resetAllData() {
        setHistoric([]);
        setHighScore(0);
    }

    return (
        <GameContext.Provider value={
            {
                setHistoric, historic, resetAllData, highScore, setHighScore, resetHistoric, nickname, setNickname
            }
        }>
            {children}
        </GameContext.Provider>
    );
}