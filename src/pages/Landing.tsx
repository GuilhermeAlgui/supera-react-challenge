import React, { useState } from 'react';

import Game from '../components/Game';
import Header from '../components/Header';
import products from '../products.json';

import order from '../functions/order';

import './styles/landing.css';
import SideBar from '../components/Sidebar';

function Landing() {
	console.log(products);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [filteredProducts, setFilteredProducts] = useState(products);

	const [produtos, setProdutos] = useState(products);

	function handleSorting(field: string, asc: boolean) {
		const sortedProducts = order(produtos, field, asc);
		setProdutos([...sortedProducts]);
		console.log(produtos);
	}

	function handleFilter(minPrice: number, maxPrice: number) {
		const p = filteredProducts.filter((produto) => {
			if (produto.price > minPrice && produto.price < maxPrice) return produto;
			return null
		});
		setProdutos([...p]);
	}

	return (
		<div className='Landing-body'>
			<Header empresa='Supera'>

				
			</Header>
			<div className='landing-container'>
				<SideBar handlePrice={handleFilter} handleSorting={handleSorting} />
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
