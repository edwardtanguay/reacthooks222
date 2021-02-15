// import { useState } from 'react';
import '../styles/MessageBox.scss';

function MessageBox({framed}) {
	return (
		<div className={`component_messageBox ${framed === 'true' ? 'component_messageBox_framed' : 'normal'}`}>
			<h1>Message Box</h1>
			<p>This is a message box.</p>
			<p>Frame: {framed} </p>
		</div>
	)
}

export default MessageBox;