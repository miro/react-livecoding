import React from 'react';

import PersonItem from './PersonItem.jsx';

export default React.createClass({

	render: function() {
		return <div className="person__list">
			{this.props.persons.map((person, i) => (
				<PersonItem 
					onClick={() => this.props.handlePersonChange(person)}
					model={person} 
					key={i} />
			))}
		</div>;
	}
});
