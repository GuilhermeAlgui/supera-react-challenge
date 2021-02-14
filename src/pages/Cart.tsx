import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './styles/cart.css';

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
interface CartItems {
	id: number;
	name: string;
	price: number;
	score: number;
	image: string;
	quantity: number;
}

function Cart() {
	const dispatch = useDispatch();

	const cart = useSelector((state: defaultProps) => {
		return state.cartItems;
	});
	const [total, setTotal] = useState(0);
	const [frete, setFrete] = useState(0);

	const [itemsCarrinho, setItemsCarrinho] = useState<CartItems[]>(cart);

	console.log(itemsCarrinho);

	useEffect(() => {
		setItemsCarrinho(cart);
	}, [cart]);

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

	function alterQuantity(item: CartItems, newQTD: number) {
		dispatch({ type: 'ALTER_QUANTITY', product: item, newQTD });
	}
	function removeItem(item: CartItems) {
		dispatch({ type: 'REMOVE_ITEM', product: item });
	}
	function clearCart() {
		dispatch({ type: 'REMOVE_ALL' });
	}

	useEffect(() => {
		handleTotal();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cart]);

	return (
		<div className='cart-body'>
			<Header empresa='Supera' />
			<div className='cart-container'>
				<h2 className='cart-title'>Meu Carrinho</h2>
				<div className='cart-options'>
					<div className='cart-product-list'>
						{itemsCarrinho.length !== 1 ? (
							itemsCarrinho.map((item) => {
								if (item.id !== 0)
									return (
										<div className='cart-product-container' key={item.id}>
											<img
												src={`${process.env.PUBLIC_URL}/assets/${item.image}`}
												alt={item.name}
											/>
											<p className='cart-product-name'>{item.name}</p>
											<div>
												<div className='cart-product-buttons'>
													<button
														onClick={() => {
															if (item.quantity !== 1) {
																alterQuantity(item, item.quantity - 1);
															} else if (item.quantity === 1) {
																removeItem(item);
															}
														}}>
														-
													</button>
													<p>{item.quantity}</p>
													<button
														onClick={() => {
															alterQuantity(item, item.quantity + 1);
														}}>
														+
													</button>
												</div>
											</div>
											<p className='cart-product-price'>
												Preço: R${(item.price * item.quantity).toFixed(2)}
											</p>
										</div>
									);
								else return null;
							})
						) : (
							<Link className='cart-empty' to='/'>
								<h1>
									Seu Carrinho está vazio, clique aqui para voltar a tela
									principal
								</h1>
							</Link>
						)}
					</div>
					<div className='cart-summary'>
						<h2>Resumo do Pedido</h2>
						<p className='cart-summary-valor-title'>Valor dos Produtos:</p>
						<p className='cart-summary-valor-text'>R${total.toFixed(2)}</p>
						<p className='cart-summary-frete'>
							Valor do Frete:
							<p className='cart-summary-frete-text'>
								{frete === 0 ? 'Grátis' : `R$${frete.toFixed(2)}`}
							</p>
						</p>
						<p className='cart-summary-total'>Valor total:</p>
						<p className='cart-summary-total-text'>
							R${(total + frete).toFixed(2)}
						</p>

						{total > 0 ? (
							<div className='cart-summary-buttons'>
								<button
									onClick={() => {
										alert('Compra Feita com sucesso');
									}}>
									Efetuar Compra
								</button>
								<button
									onClick={() => {
										clearCart();
									}}>
									Limpar Carrinho
								</button>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
