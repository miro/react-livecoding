import React from 'react';

export default React.createClass({

	render: function() {
		return <div className="person__list">
			{this.props.persons.map((person, i) => (
				<PersonItem 
					onClick={this.props.handlePersonChange(person)}
					model={person} 
					key={i} />
			))}
		</div>;
	}
});
