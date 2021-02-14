import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import LandingBusca from './pages/LandingBusca';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Landing} />
				<Route path='/busca/:pesquisa' component={LandingBusca} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
