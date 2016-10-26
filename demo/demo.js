/**
 * demo 如何使用 react-dialog
 * @author  yongbing
 * @email   yongbingz@qq.com
 */

import './demo.scss'
import Dialog from '../src/Dialog'

class Demo extends React.Component{
	constructor(props){
		super(props);
		this.state={
			visible:false,
			width:600
		}
		this.onClose = this.onClose.bind(this);
		this.onClick = this.onClick.bind(this);
		this.changeWidth = this.changeWidth.bind(this);
	}

	onClick(){
		this.setState({
			visible:true
		});
	}

	onClose(){
		this.setState({
			visible:false
		})
	}

	changeWidth(){
		this.setState({
			width:this.state.width==600?800:600
		})
	}

	render(){
		let dialog;
		let style = {
			width: this.state.width,
			height: 200
		}
		dialog = (
			<Dialog
				visible={ this.state.visible }
				style={style} 
				onClose={this.onClose}
				closeVisible={false} //or closeContent:{ <div className="abc"></div> }
				onClickMask
			>
				<div>
					<p>react dialog demo <br/><br/></p>
      				<button onClick={this.changeWidth}>Change width</button>
				</div>
			</Dialog>
		);
		return(
				<div>
					<div className="demo">
						<button onClick={this.onClick}>click react dialog</button>{' '}{' '}
					</div>
					{dialog}
				</div>
			)
	}
}

ReactDOM.render(
		<Demo />,
		document.getElementById('J_rc')
	);