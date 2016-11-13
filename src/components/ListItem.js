import React, { Component } from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';

class ListItem extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col xs={12} sm={10} md={10} smOffset={1} mdOffset={1}>
					<FormControl
						type="text"
						placeholder="Add a to-do"
					/>
				</Col>
			</Row>
		);
	}
}

export default ListItem;