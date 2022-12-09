import { Component } from "react";

class LifeCycle extends Component {
	constructor (props) {
		super(props);
		this.state = {count :1};
	};

	countFnc =() =>{
		this.setState({
			count: this.state.count +1
		});
	};

	render(){
		console.log('count = ' + this.state.count);
		return (
			<h2>{this.state.count}</h2>
		);
	};

	componentDidMount() {
		setInterval(() => {
			this.countFnc()
		}, 1000);
		console.log('componentDidMount')
	}
};

export default LifeCycle
