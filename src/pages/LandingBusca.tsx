import React, { useEffect, useState } from 'react';

import Game from '../components/Game';
import Header from '../components/Header';
import products from '../products.json';

import order from '../functions/order';

import './styles/landing.css';
import { useParams } from 'react-router-dom';
import SideBar from '../components/Sidebar';

interface buscaParams {
	pesquisa: string;
}

function LandingBusca() {
	const params = useParams<buscaParams>();
	console.log(products);
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
			return null;
		});
		setProdutos([...p]);
	}

	useEffect(() => {
		const p = products.filter((produto) => {
			if (produto.name.toLowerCase().includes(params.pesquisa.toLowerCase()))
				return produto;
			return null;
		});
		setFilteredProducts([...p]);
		setProdutos([...p]);
	}, [params.pesquisa]);

	return (
		<div className='Landing-body'>
			<Header empresa='Supera'></Header>
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

export default LandingBusca;
