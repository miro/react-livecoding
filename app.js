import React from 'react';
import ReactDOM from 'react-dom';

import PersonList from './components/PersonList.jsx';
import PersonDetail from './components/PersonDetails.jsx';



const App = React.createClass({

	getInitialState: function() {
		return {
			persons: [
				{ name: 'Esa', desc: 'kova ukko' },
				{ name: 'Kaija', desc: 'vielä kovempi' }
			],
			activePerson:{}
		};
	},

  render: function() {
    return <div className="site__wrapper">
    	<h2>CV tietokanta 6000+</h2>
			
			<PersonList persons={this.state.persons} 
				handlePersonChange={(person) =>
					this.setState({
						activePerson:person
					})
				}/>
			<PersonDetail model={this.state.activePerson} />
    </div>;
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
