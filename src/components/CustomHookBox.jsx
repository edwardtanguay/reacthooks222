import { useState } from 'react';
import '../styles/CustomHookBox.scss';
import { useInput } from '../hooks/useInput';

function CustomHookBox() {
	const [elements, setElements] = useState([]);
	const [nameProps, resetName] = useInput('');
	const [colorProps, resetColor] = useInput('#ff0000');

	const submit = () => {
		setElements([...elements,
		{
			name: nameProps.value,
			color: colorProps.value
		}
		]);
		resetName();
		resetColor();
	}
	return (
		<div className="component_CustomHookBox">
			<h1>CustomHook Box</h1>
			<form>
				<h2>Define Page Elements:</h2>
				<div><label>Name:</label><input {...nameProps} type="text" /></div>
				<div><label>Color:</label><input {...colorProps} type="color" /></div>
				<button type="button" onClick={() => submit()}>Save</button>
			</form>
			<h2>Currently {elements.length} Elements:</h2>
			<ul>
				{elements.map((element) => (
					<li key={element.name}>{element.name} = {element.color}</li>
				))}
			</ul>
		</div>
	)
}

export default CustomHookBox;