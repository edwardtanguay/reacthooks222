import { useBooks } from '../index.js';

function BooksBox() {
	const { books } = useBooks(); 
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