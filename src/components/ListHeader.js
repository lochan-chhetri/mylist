import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
require('../style/style.scss');
require('../style/header.scss');

class ListHeader extends Component {
	render() {
		return (
			<Row className="show-grid">
				<Col xs={9} sm={7} md={7} smOffset={1} mdOffset={1}>
					<h1>ToDo Title</h1>
				</Col>
				<Col xs={3} sm={3} md={3}>
					<Button bsStyle="success" block>Add</Button>
				</Col>
			</Row>
		);
	}
}

export default ListHeader;