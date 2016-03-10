import React from 'react';

export default React.createClass({
	render: function() {
		return <div className="person__item mdl-card mdl-shadow--2dp">
			<h2>{this.props.model.name}</h2>
			<p>{this.props.model.desc}</p>
		</div>;
	}
});
