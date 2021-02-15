import './App.css';
import './components/InfoBox';
import InfoBox from './components/InfoBox';

function App() {
  return (
    <div className="App">
		<InfoBox title="First Box"/>
		<InfoBox title="Second Box" highlight="false"/>
		<InfoBox title="Third Box" highlight="true"/>
    </div>
  );
}

export default App;
