import React from 'react';
import { Link } from 'react-router-dom';
import './styles/game.css';

function Game(props: {
	gameId: number;
	gameName: string;
	price: number;
	score: number;
	image: string;
}) {
	const { gameName, gameId, price, image } = props;

	console.log(gameId);
	return (
		<Link to={`/produto/${gameId}`} className='game-container'>
			<img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt={gameName} />
			<p className='game-name'>{gameName}</p>
			<p className='game-price'>R${price.toFixed(2)}</p>
		</Link>
	);
}

export default Game;
