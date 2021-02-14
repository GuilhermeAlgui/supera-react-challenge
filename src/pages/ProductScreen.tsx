import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Game from '../components/Game';
import Header from '../components/Header';
import products from '../products.json';

import './styles/product.css';

interface ProductParams {
	id: string;
}
interface ProductProps {
	id: number;
	name: string;
	price: number;
	score: number;
	image: string;
}

function ProductScreen() {
	const dispatch = useDispatch();
	const params = useParams<ProductParams>();
	const [produto, setProduto] = useState<ProductProps>();
	const history = useHistory();

	function addProduct() {
		dispatch({ type: 'ADD_CART', product: produto });
	}

	useEffect(() => {
		const p = products.find((product) => {
			if (product.id === parseInt(params.id)) return product;
			else return undefined;
		});
		if (p) setProduto(p);
		else {
			history.replace('/');
		}
		console.log(p);
	}, [params.id, history]);

	return (
		<div className='product-body'>
			<Header empresa='Supera' />
			<div className='product-container'>
				<div className='product-image-container'>
					<img
						src={`${process.env.PUBLIC_URL}/assets/${produto?.image}`}
						alt='Jogo'
					/>
					<div className='product-info-container'>
						<h2>{produto?.name}</h2>
						<h1>R${produto?.price}</h1>
						<p>Classificação: {produto?.score} pontos</p>
						<button onClick={addProduct}>Adicionar ao carrinho</button>
					</div>
				</div>
			</div>
			<div className='another-products-container'>
				<h4>Outros Produtos que pode gostar</h4>
				<div className="another-products">
					{products.map((product) => {
                        if(product.score > 100 && product.id!== parseInt(params.id))
						return (
							<Game
								gameName={product.name}
								gameId={product.id}
								price={product.price}
								score={product.score}
								image={product.image}
							/>
						);
                        else return null    
					})}
				</div>
			</div>
		</div>
	);
}

export default ProductScreen;
