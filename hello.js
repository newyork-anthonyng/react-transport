import React from 'react';
import ReactDOM from 'react-dom';
import Transport from './lib/Transport';

const Goodbye = ({ onClick }) => (
	<h1 onClick={onClick}>Goodbye</h1>
);

class Hello extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isVisible: false,
			counter: 0
		};

		this.handleButtonClick = this.handleButtonClick.bind(this);
		this.test = this.test.bind(this);
	}

	handleButtonClick() {
		this.setState({
			isVisible: !this.state.isVisible,
			counter: this.state.counter + 1
		});
	}

	test() {
		alert(`Hello World: ${this.state.counter}`);
	}

	render() {
		return (
			<div>
				<button onClick={this.handleButtonClick}>Click Me</button>
				<Transport isOpen={this.state.isVisible}>
					<Goodbye onClick={this.test} />
				</Transport>
				<h1>Hello World</h1>
			</div>
		);
	}
}

ReactDOM.render(
	<Hello />,
	document.getElementById('hello')
);
