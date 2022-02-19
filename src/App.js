import styled from 'styled-components'
import LeaderboardPage from './leaderboard/LeaderboardPage';

const StyledApp = styled.div`
  color: white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
`

function App() {
  return (
    <StyledApp>
      <LeaderboardPage />
    </StyledApp>
  );
}

export default App;