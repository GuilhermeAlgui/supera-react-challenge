import React from 'react';
import { Link } from 'react-router-dom';
import {BiUserCircle} from 'react-icons/bi'
import './styles/header.css';

interface HeaderProps {
	empresa: string;
	children?: JSX.Element | JSX.Element[];
}

function Header({ empresa, children }: HeaderProps) {
	return (
		<div className='header-container'>
			<p className='header-title'>{empresa}</p>
			{children}
			<div className='header-user-container'>
				<p className='header-user-name'><BiUserCircle size={40}/>Olá{'\n'}usuário </p>
				<div className='header-items'>
					<Link to='/' className='header-cart'>
						<img src={`${process.env.PUBLIC_URL}/assets/cart-icon.svg`} alt='cart'/>
						<p className='header-cart-text'>Ver carrinho</p>
					</Link>
					<p className='header-cart-valor'>Valor Total:{197.88+49.99+20}</p>
				</div>
			</div>
		</div>
	);
}

export default Header;
