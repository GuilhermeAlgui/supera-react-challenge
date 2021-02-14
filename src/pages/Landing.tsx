import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Game from '../components/Game';
import Header from '../components/Header';
import products from '../products.json';

import order from '../functions/order';

import './styles/landing.css';
import SideBar from '../components/Sidebar';

function Landing() {
	console.log(products);
	const [produtos, setProdutos] = useState(products);
	const [pesquisa, setPesquisa] = useState('');

	function handleSorting(field: string, asc: boolean) {
		const sortedProducts = order(produtos, field, asc);
		setProdutos([...sortedProducts]);
		console.log(produtos);
	}
	
	function handleFilter(minPrice: number,maxPrice:number) {
		const p = produtos.filter((produto) => {
			if (produto.price > minPrice && produto.price < maxPrice) return produto;
		});
		setProdutos([...p])
	}


	return (
		<div className='Landing-body'>
			<Header empresa='Supera'>
				<span className='header-span'>
					<input
						value={pesquisa}
						onChange={(e) => {
							setPesquisa(e.target.value);
						}}
						className='header-search'
						type='text'
						name=''
						id=''
					/>
					<Link to={pesquisa.length > 0 ? `/busca/${pesquisa}` : '/'}>
						<FiSearch size={50} className='header-seach-icon' />
					</Link>
				</span>
			</Header>
			<div className='landing-container'>
				<SideBar handlePrice={handleFilter} handleSorting={handleSorting}/>
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
