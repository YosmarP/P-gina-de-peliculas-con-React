import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

import peliculasJson from './peliculas.json';
import Paginacion from './Paginacion';
import { useState } from 'react';

function ListadoPeliculas() {
	const [paginaActual,setPaginaActual]=useState(1);
	//const [peliculas,setPeliculas]=useState([]);
	const totalPorPaginas=7;
	let peliculas=peliculasJson;
	const buscarPeliculas= async ()=>{
		let url = "https://lucasmoy.dev/data/react/peliculas.json";		
		let respuesta= await fetch(url,{
			"method":'GET',
			"mode":'no-cors',
			"headers":{
				"Accept":'application/json',
				"Content-Type":'application/json'
			
			}
		});
	 	let json = await respuesta.json();
		alert(json);
		 debugger;
		//setPeliculas(json);
	}
	//buscarPeliculas();
	const cargarPeliculas=()=>{
		peliculas=peliculas.slice((paginaActual-1)*totalPorPaginas,paginaActual*totalPorPaginas);
	}
	const getTotalPaginas=()=>{
		let cantidadDePeliculas=peliculasJson.length;	
		return Math.ceil(cantidadDePeliculas/totalPorPaginas);
	}	
	cargarPeliculas();
	
	//alert(getTotalPaginas());
	//<button onClick={buscarPeliculas}>Prueba</button>
  return(
	<PageWrapper>
		
		{peliculas.map(pelicula =>
		<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director}
			actores={pelicula.actores} fecha={pelicula.fecha}
			duracion={pelicula.duracion} img={pelicula.img}>
				{pelicula.descripcion}
		</Pelicula>
		)}
		<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) =>{
			setPaginaActual(pagina);
		}}/>
	</PageWrapper>
  );
  
}

export default ListadoPeliculas;
