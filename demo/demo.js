/**
 * demo 如何使用 react-dialog
 * @author  yongbing
 * @email   yongbingz@qq.com
 */

import './demo.scss'
import Dialog from '../src/DialogWrap'

class Demo extends React.Component{
	constructor(props){
		super(props);
		this.state={
			show:false,
			width:600
		}
		this.onClose = this.onClose.bind(this);
		this.onClick = this.onClick.bind(this);
		this.changeWidth = this.changeWidth.bind(this);
	}

	onClick(){
		this.setState({
			show:true
		});
	}

	onClose(){
		this.setState({
			show:false
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
				show={ this.state.show }
				style={style} 
				onClose={this.onClose}
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