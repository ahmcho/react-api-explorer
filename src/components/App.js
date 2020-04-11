import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import ChuckNorris from './ChuckNorris';
import Numbers from './Numbers';
import NotFound from './NotFound';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={Home} exact={true}/>
				<Route path="/chuck-norris" component={ChuckNorris} />
				<Route path="/numbers" component={Numbers} />
				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>
    );
  }
}

export default App;
