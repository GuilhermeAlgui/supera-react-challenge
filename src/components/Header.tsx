import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import './styles/header.css';
import { useSelector } from 'react-redux';

interface HeaderProps {
	empresa: string;
	children?: JSX.Element | JSX.Element[];
}

interface defaultProps {
	cartItems: Array<{
		id: number;
		name: string;
		price: number;
		score: number;
		image: string;
		quantity: number;
	}>;
}

function Header({ empresa }: HeaderProps) {
	const [pesquisa, setPesquisa] = useState('');
	const [total, setTotal] = useState(0);
	const [frete, setFrete] = useState(0);

	const cart = useSelector((state: defaultProps) => {
		return state.cartItems;
	});
	console.log(cart);

	function handleTotal() {
		let newTotal = 0;
		let newfrete = 0;
		cart.forEach((item) => {
			newTotal = newTotal + item.price * item.quantity;
			newfrete = newfrete + item.quantity * 10;
		});
		if (newTotal >= 250) {
			newfrete = 0;
		}
		setTotal(newTotal);
		setFrete(newfrete);

		console.log(`Total: ${newTotal} Frete: ${newfrete}`);
	}

	useEffect(() => {
		handleTotal();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart]);

	return (
		<div className='header-container'>
			<p className='header-title'>{empresa}</p>

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
			<div className='header-user-container'>
				<p className='header-user-name'>
					<BiUserCircle size={40} />
					Olá{'\n'}usuário{' '}
				</p>
				<div className='header-items'>
					<Link to='/' className='header-cart'>
						<img
							src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`}
							alt='cart'
						/>
						<p className='header-cart-text'>Ver carrinho</p>
					</Link>
					<p className='header-cart-valor'>
						Valor Total:R${(total + frete).toFixed(2)}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
