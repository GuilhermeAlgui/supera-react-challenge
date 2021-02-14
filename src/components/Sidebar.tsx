import React, { useState } from 'react';
import './styles/sidebar.css';

interface SideBarProps {
	handleSorting: any;
	handlePrice: any;
}

function SideBar(props: SideBarProps) {
	const [orderPriceAsc, setOrderPriceAsc] = useState(false);
	const [orderPriceDesc, setOrderPriceDesc] = useState(false);
	const [orderScoreAsc, setOrderScoreAsc] = useState(false);
	const [orderScoreDesc, setOrderScoreDesc] = useState(false);
	const [orderAlfAsc, setOrderAlfAsc] = useState(false);
	const [orderAlfDesc, setOrderAlfDesc] = useState(false);

	const [allPrices, setAllPrices] = useState(true);
	const [max50, setMax50] = useState(false);
	const [min50Max150, setMin50Max150] = useState(false);
	const [min150, setMin150] = useState(false);

	const { handleSorting, handlePrice } = props;

	return (
		<div className='landing-filters'>
			<div className='landing-filters-orders'>
				<div className='landing-order-options'>
					<h2>Ordenação</h2>
					<button
						onClick={() => {
							handleSorting('price', true);
							setOrderPriceAsc(true);
							setOrderPriceDesc(false);
							setOrderAlfAsc(false);
							setOrderAlfDesc(false);
							setOrderScoreAsc(false);
							setOrderScoreDesc(false);
						}}>
						Menor preço
						<input checked={orderPriceAsc} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handleSorting('price', false);
							setOrderPriceAsc(false);
							setOrderPriceDesc(true);
							setOrderAlfAsc(false);
							setOrderAlfDesc(false);
							setOrderScoreAsc(false);
							setOrderScoreDesc(false);
						}}>
						Maior preço
						<input checked={orderPriceDesc} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handleSorting('score', true);
							setOrderPriceAsc(false);
							setOrderPriceDesc(false);
							setOrderAlfAsc(false);
							setOrderAlfDesc(false);
							setOrderScoreAsc(true);
							setOrderScoreDesc(false);
						}}>
						Menor popularidade
						<input checked={orderScoreAsc} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handleSorting('score', false);
							setOrderPriceAsc(false);
							setOrderPriceDesc(false);
							setOrderAlfAsc(false);
							setOrderAlfDesc(false);
							setOrderScoreAsc(false);
							setOrderScoreDesc(true);
						}}>
						Maior popularidade
						<input checked={orderScoreDesc} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handleSorting('name', true);
							setOrderPriceAsc(false);
							setOrderPriceDesc(false);
							setOrderAlfAsc(true);
							setOrderAlfDesc(false);
							setOrderScoreAsc(false);
							setOrderScoreDesc(false);
						}}>
						A-Z
						<input checked={orderAlfAsc} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handleSorting('name', false);
							setOrderPriceAsc(false);
							setOrderPriceDesc(false);
							setOrderAlfAsc(false);
							setOrderAlfDesc(true);
							setOrderScoreAsc(false);
							setOrderScoreDesc(false);
						}}>
						Z-A
						<input checked={orderAlfDesc} type='checkbox' name='' id='' />
					</button>
				</div>
				<div className='landing-filter-options'>
					<h2>Filtros</h2>
					<button
						onClick={() => {
							handlePrice(0, 100000);
							setMax50(false);
							setMin50Max150(false);
							setMin150(false);
							setAllPrices(true);
						}}>
						Todos
						<input checked={allPrices} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handlePrice(0, 50);
							setMax50(true);
							setMin50Max150(false);
							setMin150(false);
							setAllPrices(false);
						}}>
						Até R$50.00
						<input checked={max50} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handlePrice(50, 150);
							setMax50(false);
							setMin50Max150(true);
							setMin150(false);
							setAllPrices(false);
						}}>
						De R$50.00 até R$150.00
						<input checked={min50Max150} type='checkbox' name='' id='' />
					</button>
					<button
						onClick={() => {
							handlePrice(150, 100000);
							setMax50(false);
							setMin50Max150(false);
							setMin150(true);
							setAllPrices(false);
						}}>
						Acima de 150
						<input checked={min150} type='checkbox' name='' id='' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
