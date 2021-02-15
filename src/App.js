import './App.css';
import './components/InfoBox';
import InfoBox from './components/InfoBox';
import MessageBox from './components/MessageBox';

function App() {
  return (
    <div className="App">
		<InfoBox title="First Box"/>
		<InfoBox title="Second Box" highlight="false"/>
		<InfoBox title="Third Box" highlight="true"/>
		<MessageBox framed="true"></MessageBox>
    </div>
  );
}

export default App;