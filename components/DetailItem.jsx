import React from 'react';

export default React.createClass({
	render: function() {
		const {name, year, desc} = this.props.item;

		return <div className="detail__item">
			<h4>
				{name}
				<span className="detail__year">{year}</span>
			</h4>
			<p>{desc}</p>
		</div>;
	}
});
