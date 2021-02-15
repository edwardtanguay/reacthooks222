import {useState} from 'react';
import '../styles/InfoBox.scss';

function InfoBox({ title, highlight }) {
	const [ noteState, setNoteState ] = useState('hide');

	const [first, second, third] = ["James", "Axel", "Henri"];
	console.log(first, second, third);

	return (
		<div className="component_infoBox">
			<h1>{title}</h1>
			<p>Info Box</p>
			<p>Note State: {noteState}</p>
			<p>Highlight: {highlight} </p>
			{ noteState === 'show' && (
				<p className={highlight === "true" ? "highlight" : "normal"} >
					This is the note
				</p>
			)}
			<button onClick={() => setNoteState(noteState === 'show' ? 'hide' : 'show')}>Show</button>
		</div>	
	);
}

export default InfoBox;