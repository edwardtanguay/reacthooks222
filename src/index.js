import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const BooksContext = createContext();
export const useBooks = () => useContext(BooksContext);

const books = [
	{
		id: 1,
		title: 'The Master and His Emissary',
		author: 'Iain McGilchrist'
	},
	{
		id: 2,
		title: 'The Book of Why',
		author: 'Judea Pearl'
	},
	{
		id: 3,
		title: 'Homo Deus',
		author: 'Yuval Harari'
	},
	{
		id: 4,
		title: 'Der Ego-Tunnel',
		author: 'Thomas Metzinger'
	}
];

ReactDOM.render(
	<React.StrictMode>
		<BooksContext.Provider value={{ books }}>
			<App />
		</BooksContext.Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
