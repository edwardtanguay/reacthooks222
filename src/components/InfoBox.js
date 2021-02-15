import {useState} from 'react';
import '../styles/InfoBox.css';

function InfoBox(props) {
	const [ noteState, setNoteState ] = useState('hide');
	return (
		<div className="component_infoBox">
			<h1>{props.title}</h1>
			<p>Info Box</p>
			<p>Note State: {noteState}</p>
			<p>Highlight: {props.highlight} </p>
			{ noteState === 'show' && (
				<p className={props.highlight === "true" ? "highlight" : "normal"} >
					This is the note
				</p>
			)}
			<button onClick={() => setNoteState(noteState === 'show' ? 'hide' : 'show')}>Show</button>
		</div>	
	);
}

export default InfoBox;