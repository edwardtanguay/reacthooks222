import { useRef, useState, useEffect } from 'react';
import '../styles/UseRefBox.scss';

function UseRefBox() {
	const [elements, setElements] = useState([]);
	const name = useRef();
	const color = useRef();

	const submit = (e) => {
		e.preventDefault();
		console.log(name.current.value, color.current.value);
		elements.push(
			{
				name: name.current.value,
				color: color.current.value
			}
		);
		setElements(elements);
		console.log(elements);
	}
	useEffect(() => {
		console.log('here');
	}, []);
	return (
		<div className="component_useRefBox">
			<h1>UseRef Box</h1>
			<form onSubmit={submit}>
				<h2>Page Elements:</h2>
				<div><label>Name:</label><input ref={name} type="text" /></div>
				<div>
					<label>Color:</label><input ref={color} type="color" />
				</div>
				<button>Save</button>
			</form>
			<ul>
				{elements.map((element) => (
					<li key={element.name}>nnn</li>
				))}
			</ul>
		</div>
	)
}

export default UseRefBox;