import styled from 'styled-components';
import './Leaderboard.css'

const StyledLeaderboardItem = styled.div`

    background-color: #424242;
    padding: 2px 8px 2px 8px;
    margin: 16px;
    width: auto;
    border-radius: 8px;
`;

export default function LeaderboardItem({position, name, score, ...props}) {

    return <StyledLeaderboardItem>
        <div>
            <h3>{position}. {name}</h3>
            <p>{score}</p>
        </div>
    </StyledLeaderboardItem>
}