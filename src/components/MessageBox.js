import { useState } from 'react';
import '../styles/MessageBox.scss';

function MessageBox({framed}) {
	const [background, setBackground] = useState(false);
	return (
		<div className={`component_messageBox ${framed === 'true' ? 'component_messageBox_framed' : 'component_messageBox_normal'}
		${background ? 'component_messageBox_background' : 'component_messageBox_normal'}
		`}>
			<h1>Message Box</h1>
			<p>This is a message box.</p>
			<p>Frame: {framed} </p>
			<p>Background: {background ? 'on' : 'off'} </p>
			<button onClick={() => setBackground(background ? false : true)}>Background</button>
		</div>
	)
}

export default MessageBox;