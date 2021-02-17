import { useRef, useState } from 'react';
import '../styles/UseRefBox.scss';

function UseRefBox() {
	const [elements, setElements] = useState([]);
	const name = useRef();
	const color = useRef();

	const submit = () => {
		setElements([...elements,
			{
				name: name.current.value,
				color: color.current.value
			}
		])
	}
	return (
		<div className="component_useRefBox">
			<h1>UseRef Box</h1>
			<form>
				<h2>Define Page Elements:</h2>
				<div><label>Name:</label><input ref={name} type="text" /></div>
				<div>
					<label>Color:</label><input ref={color} type="color" />
				</div>
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

export default UseRefBox;