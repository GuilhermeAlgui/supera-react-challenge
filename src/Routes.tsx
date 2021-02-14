import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Landing from './pages/Landing';
import LandingBusca from './pages/LandingBusca';
import ProductScreen from './pages/ProductScreen';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/busca/:pesquisa' component={LandingBusca} />
				<Route path='/produto/:id' component={ProductScreen} />
				<Route path="/carrinho" component={Cart}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
