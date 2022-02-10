import './App.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext'
import AddMovies from './AddMovies';

function App() {
	return (
		<MovieProvider>
			<div className="App">
				<Nav></Nav>
				<AddMovies></AddMovies>
				<MovieList></MovieList>
			</div>
		</MovieProvider>
	);
}

export default App;
