import './App.css';
import './components/InfoBox';
import InfoBox from './components/InfoBox';
import MessageBox from './components/MessageBox';
import NoteBox from './components/NoteBox';
import DataBox from './components/DataBox';

function App() {
  return (
    <div className="App">
		<NoteBox></NoteBox>
		<hr/>
		<DataBox></DataBox>
		<hr/>
		<InfoBox title="First Box"/>
		<InfoBox title="Second Box" highlight="false"/>
		<InfoBox title="Third Box" highlight="true"/>
		<MessageBox framed="true"></MessageBox>
		<MessageBox framed="true"></MessageBox>
    </div>
  );
}

export default App;