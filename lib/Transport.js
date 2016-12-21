import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

class Transport extends React.Component {
	constructor(props) {
		super(props);

		this.node = null;

		this.openTransport = this.openTransport.bind(this);
		this.closeTransport = this.closeTransport.bind(this);
	}

	componentDidMount() {
		if(this.props.isOpen) {
			this.openTransport();
		}
	}

	componentWillReceiveProps(newProps) {
		if(newProps.isOpen) {
			this.openTransport();
		} else {
			this.closeTransport();
		}
	}

	openTransport() {
		if(!this.node) {
			this.node = document.createElement('div');
			document.body.appendChild(this.node);

			ReactDOM.unstable_renderSubtreeIntoContainer(
				this,
				this.props.children,
				this.node
			);
		}
	}

	closeTransport() {
		if(this.node) {
			document.body.removeChild(this.node);
			this.node = null;
		}
	}

	render() {
		return null;
	}
};

Transport.propTypes = {
	children: PropTypes.element.isRequired
};

export default Transport;
