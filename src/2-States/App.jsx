import ColorBox from './components/ColorBox';
import Counter from './components/Counter';
import Counter2 from './components/Counter2';
import Dumbo from './components/Dumbo';
import ScoreKeeper from './components/ScoreKeeper';
import EmojiClicker from './components/EmojiClicker';
import ScoreKeeper2 from './components/ScoreKeeper2';

function App() {
	return (
		<>
			{/* <Counter /> */}
			{/* <ColorBox /> */}
			{/* <Counter2 /> */}
			{/* <Dumbo />  */}
			{/* <ScoreKeeper />  */}
			{/* <EmojiClicker /> */}
			<ScoreKeeper2 playerCount={5} finalScore={5} />
		</>
	);
}

export default App;
