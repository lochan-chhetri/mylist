import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import ListHeader from './ListHeader';
import ListItem from './ListItem';

class List extends Component {
	render() {
		return (
			<Grid>
				<ListHeader />
				<ListItem />
			</Grid>
		);
	}
}

export default List;