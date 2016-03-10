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
			activePerson: {}
		};
	},

  render: function() {
    return <div className="site__wrapper">

			
			<PersonList persons={this.state.persons} 
				handlePersonChange={(person) =>
					this.setState({
						activePerson:person
				})}

				handlePersonAdd={(e) => {
					var name = prompt('Name'),
							desc = prompt('Description'),
							persons =  this.state.persons;
					if (name) {
						persons.push({name:name, desc:desc})
						this.setState({
							persons:persons
						})
					}}
				}/>

			<PersonDetail 
				model={this.state.activePerson}
				handleDetailAdd={newDetail => {
					console.log(this.state.activePerson, newDetail);

					if (!this.state.activePerson.name) {
						console.log('no active person selected');
						return;
					}

					this.state.activePerson.detailsList = this.state.activePerson.details || [];
					this.state.activePerson.detailsList.push(newDetail);

					this.setState({ activePerson });
				}} />
    </div>;
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
