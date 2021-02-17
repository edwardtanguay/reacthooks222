import { BooksContext } from '../index.js';
import { useContext } from 'react';

function BooksBox() {
	const { books } = useContext(BooksContext);
	return (
		<div>
			<h1>Books Box</h1>
			<ul>
				{books.map(book => (
					<li key={book.id}>{book.title}</li>
				))}
			</ul>
		</div>
	);
}

export default BooksBox;