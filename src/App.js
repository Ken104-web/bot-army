import './App.css';
import { Route, Routes } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BotCollection />} />
      <Route path="/yourbotarmy" element={<YourBotArmy />} />
    </Routes>
  );
}

export default App;
