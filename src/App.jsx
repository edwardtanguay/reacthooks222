import './App.css';
import './components/InfoBox';
import React from 'react';
import InfoBox from './components/InfoBox';
import MessageBox from './components/MessageBox';
import NoteBox from './components/NoteBox';
import DataBox from './components/DataBox';
import ReducerBox from './components/ReducerBox';
import ToggleBox from './components/ToggleBox';
import DispatchBox from './components/DispatchBox';
import UseRefBox from './components/UseRefBox';
import CustomHookBox from './components/CustomHookBox';
import BooksBox from './components/BooksBox';
import HookFetchBox from './components/HookFetchBox';
import UpdateWithFetchBox from './components/UpdateWithFetchBox';

function App() {
	return (
		<div className="App">
			<div className="notice">The code for this website is available at <a href="https://github.com/edwardtanguay/reacthooks222">https://github.com/edwardtanguay/reacthooks222</a> </div>
			<hr />
			<UpdateWithFetchBox></UpdateWithFetchBox>
			<hr />
			<HookFetchBox login="rwightman"></HookFetchBox>
			<HookFetchBox login="edwardtanguay"></HookFetchBox>
			<HookFetchBox login="mitsuhiko"></HookFetchBox>
			<hr />
			<BooksBox></BooksBox>
			<hr />
			<CustomHookBox></CustomHookBox>
			<hr />
			<UseRefBox></UseRefBox>
			<hr />
			<DispatchBox message="Sent from App.jsx"></DispatchBox>
			<hr />
			<ToggleBox></ToggleBox>
			<hr />
			<ReducerBox></ReducerBox>
			<hr />
			<NoteBox></NoteBox>
			{/* <hr />
			<DataBox></DataBox> */}
			<hr />
			<InfoBox title="First Box" />
			<InfoBox title="Second Box" highlight="false" />
			<InfoBox title="Third Box" highlight="true" />
			<MessageBox framed="true"></MessageBox>
			<MessageBox framed="true"></MessageBox>
		</div>
	);
}

export default App;
