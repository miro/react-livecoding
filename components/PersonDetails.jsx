import React from 'react';

import DetailItem from './DetailItem.jsx';

export default React.createClass({

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
		</div>;
	}
});
