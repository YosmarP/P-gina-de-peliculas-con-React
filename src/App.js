import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';

function App() {
	let peliculas=peliculasJson;
  return(
	<PageWrapper>
		{peliculas.map(pelicula =>
		<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director}
			actores={pelicula.actores} fecha={pelicula.fecha}
			duracion={pelicula.duracion} img={pelicula.img}>
				{pelicula.descripcion}
		</Pelicula>
		)}
		<Paginacion pagina={2} total={4} onChanage={(pagina) =>{
			alert();
		}}/>
	</PageWrapper>
  );
  
}

export default App;
