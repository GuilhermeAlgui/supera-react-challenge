import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import Game from '../components/Game';
import Header from '../components/Header';
import products from '../products.json';

import order from '../functions/order';

import './styles/landing.css';
import { Link, useParams } from 'react-router-dom';
import SideBar from '../components/Sidebar';

interface buscaParams {
	pesquisa: string;
}

function LandingBusca() {
	const params = useParams<buscaParams>();
	console.log(products);
	const [filteredProducts,setFilteredProducts] = useState(products)
	const [produtos, setProdutos] = useState(products);
	const [pesquisa, setPesquisa] = useState(params.pesquisa);
	

	function handleSorting(field: string, asc: boolean) {
		const sortedProducts = order(produtos, field, asc);
		setProdutos([...sortedProducts]);
		console.log(produtos);
	}

	function handleFilter(minPrice: number,maxPrice:number) {
		

		const p = filteredProducts.filter((produto) => {
			if (produto.price > minPrice && produto.price < maxPrice) return produto;
		});
		setProdutos([...p])

	}

	useEffect(() => {
		const p = products.filter((produto) => {
			if (produto.name.toLowerCase().includes(params.pesquisa.toLowerCase()))
				return produto;
		});
		setFilteredProducts([...p])
		setProdutos([...p]);
	}, [params.pesquisa]);

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
