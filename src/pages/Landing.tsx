import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import Game from '../components/Game';
import Header from '../components/Header';
import products from '../products.json';

import order from '../functions/order';

import './styles/landing.css';

function Landing() {
	console.log(products);
	const [produtos, setProdutos] = useState(products);
	return (
		<div className='Landing-body'>
			<Header empresa='Supera'>
				<span className='header-span'>
					<input className='header-search' type='text' name='' id='' />
					<FiSearch size={50} className='header-seach-icon' />
				</span>
			</Header>
			<div className='landing-container'>
				<div className='landing-filters'>
					<div className='landing-filters-orders'>
						<div className='landing-order-options'>
							<h2>Ordenação</h2>
							<button
								onClick={() => {
									const sortedProducts = order(produtos, 'price', true);
									setProdutos([...sortedProducts]);
									console.log(produtos);
								}}>
								Menor preço
							</button>
							<button
								onClick={() => {
									const sortedProducts = order(produtos, 'price', false);
									setProdutos([...sortedProducts]);
									console.log(produtos);
								}}>
								Maior preço
							</button>
							<button>Menor popularidade</button>
							<button>Maior popularidade</button>
							<button>Menor Score</button>
							<button>Maior Score</button>
						</div>
						<div className='landing-filter-options'>
							<h2>Filtros</h2>
							<span>
								<input type='checkbox' name='' id='' /> Até 50.00
							</span>
							<span>
								<input type='checkbox' name='' id='' /> De 50.00 á 150.00
							</span>
							<span>
								<input type='checkbox' name='' id='' /> 150.00 ou superior
							</span>
						</div>
					</div>
				</div>
				<div className='landing-products'>
					{produtos.map((product) => {
						return (
							<Game
								gameName={product.name}
								gameId={product.id}
								price={product.price}
								score={product.score}
								image={product.image}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Landing;
