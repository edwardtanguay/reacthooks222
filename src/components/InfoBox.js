import {useState} from 'react';

function InfoBox(props) {
	const [ noteState, setNoteState ] = useState('hide');
	return (
		<div>
			<h1>{props.title}</h1>
			<p>Info Box</p>
			<p>Note State: {noteState}</p>
			{ noteState === 'show' && (
				<p>
					This is the note
				</p>
			)}
			<button onClick={() => setNoteState(noteState === 'show' ? 'hide' : 'show')}>Show</button>
		</div>	
	);
}

export default InfoBox;