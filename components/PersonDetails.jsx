import React from 'react';

import DetailItem from './DetailItem.jsx';

export default React.createClass({

	getInitialState: function() {
		return {
			name: '',
			year: '',
			desc: ''
		};
	},

	createNewDetail: function() {
		this.props.handleDetailAdd({
			name: this.state.name,
			year: this.state.year,
			desc: this.state.desc
		});

		this.setState({
			name: '',
			year: '',
			desc: ''
		});
	},

	render: function() {
		const detailItems = this.props.detailItems || [
			{name: 'test', year: '2015', desc: 'jfiodasjfoida sjfdo a'}
		];

		return <div className="person__detail">
			<h2>{this.props.model.name}</h2>
			<p>{this.props.model.desc}</p>

			{detailItems.map((item, i) => (
				<DetailItem item={item} key={i} />
			))}
	
			
			<div className="detail__create">
				Taito: <input type="text" value={this.state.name} onChange={event => this.setState({ name: event.value})} />
				Vuosi: <input type="text" value={this.state.year} onChange={event => this.setState({ year: event.value})} />
				Kuvaus: <input type="text" value={this.state.desc} onChange={event => this.setState({ desc: event.value})} />
			</div>

			<button onClick={() => this.createNewDetail()}>
				Lisää Taito
			</button>
		</div>;
	}
});
