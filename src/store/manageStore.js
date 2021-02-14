import { createStore } from 'redux';

/*interface productProps {
	id: number;
	name: string;
	price: number;
	score: number;
	image: string;
}
/*interface cartItemProps<Array> {
	id: number;
	name: string;
	price: number;
	score: number;
	image: string;
	quantity: number;
}*/

const DEFAULT_STATE = {
	cartItems: [
		{
			id: 0,
			name: '',
			price: 0,
			score: 0,
			image: '',
			quantity: 0,
		},
	],
};

const INITIAL_STATE = {
	cartItems: [
		{
			id: 0,
			name: '',
			price: 0,
			score: 0,
			image: '',
			quantity: 0,
		},
	],
};

function cart(state = INITIAL_STATE, action) {
	const { cartItems } = state;

	switch (action.type) {
		case 'ADD_CART':
			for (let i = 0; i < cartItems.length; i++) {
				if (cartItems[i].id === action.product.id) {
					const newCart = [...cartItems];
					newCart[i].quantity = newCart[i].quantity + 1;
					console.log(newCart[i]);
					return { ...state, cartItems: [...newCart] };
				}
			}

			const p = { ...action.product, quantity: 1 };
			console.log(state);
			return { ...state, cartItems: [...state.cartItems, p] };
		case 'ALTER_QUANTITY':
			console.log(action);
			for (let i = 0; i < cartItems.length; i++) {
				if (cartItems[i].id === action.product.id) {
					const newCart = [...cartItems];
					newCart[i].quantity = action.newQTD;
					console.log(newCart[i]);
					return { ...state, cartItems: [...newCart] };
				}
			}

			return { ...state };

		case 'REMOVE_ITEM':
			for (let i = 0; i < cartItems.length; i++) {
				console.log('cake');
				if (cartItems[i].id === action.product.id) {
					const newCart = [...cartItems];
					newCart.splice(i, 1);
					return { ...state, cartItems: [...newCart] };
				}
			}
			return { ...state };
		case 'REMOVE_ALL':
			return { ...DEFAULT_STATE };

		default:
			return state;
	}
}

const store = createStore(cart);

export default store;
