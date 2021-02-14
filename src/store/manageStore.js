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

function cart(
	state = INITIAL_STATE,
	action
) {
	switch (action.type) {
		case 'ADD_CART':
			const p = { ...action.product, quantity: 1 };
            console.log(state)
			return { ...state, cartItems: [...state.cartItems, p] };
		case 'CALCULATE_TOTAL':
			return { ...state };

		default:
			return state;
	}
}

const store = createStore(cart);

export default store;
