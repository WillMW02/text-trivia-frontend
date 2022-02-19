import { useEffect, useState } from "react";
import LeaderboardItem from "./LeaderboardItem";
import './Leaderboard.css'

const data = {
    "scores": [
        {"position": "1", "name": "Arthur Jarvis", "score": "69"},
        {"position": "2", "name": "John", "score": "68"}
    ]
};

export default function LeaderboardPage() {

    /*const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://api.never.study/scores")
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setItems(result);
        })
    }, [])*/

    const items = data.scores;

    return (
        <ul>
            {items.map(item => (
                <li key={item.position}>
                <LeaderboardItem position={item.position} name={item.name} score={item.score} />
            </li>
        ))}
        </ul>
    );
}