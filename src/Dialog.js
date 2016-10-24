/**
 * Dialog.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */

import { PropTypes } from 'react'
import Base from './base'

class Dialog extends React.Component{
	constructor(props){
		super(props);

		this.close = this.close.bind(this);
		this.onMask = this.onMask.bind(this);
		this.handlerResize = this.handlerResize.bind(this);
	}

	close(e){
		this.props.onClose();
	}
	onClickDialog(e){
		e.stopPropagation();
		e.preventDefault();
	}
	onMask(e){
		e.stopPropagation();
		e.preventDefault();

		const { onClickMask } = this.props;
		
		if (onClickMask) {
			this.props.onClose();
		}
	}

	offset(){
		const dialog = this.dialog;
		if (!dialog) { return; }
		let ret = {
			width: dialog.offsetWidth,
			height: dialog.offsetHeight
		}
		this.offset = ret;
		return ret;
	}

	onWinResize(){
		Base.addEvent(window, 'resize', this.handlerResize);
	}


	handlerResize(){
		const dialog = this.dialog;
		if (!dialog) {return;}
		
		
		const  winSize = Base.getWinSize(),
				offset = typeof this.offset === 'function' ? this.offset():this.offset;
		
		///dialog.style.left = (winSize.width - offset.width)/2 +'px';
		dialog.style.top = (winSize.height - offset.height)/2 +'px';
	}

	componentDidMount(){			  
		this.dialog = ReactDOM.findDOMNode(this.refs.rcDialog);
		this.handlerResize();

		const that = this;
		setTimeout(function(){
			that.onWinResize();
		},100);
		
	}

	shouldComponentUpdate({ show }) {
	    return !!(this.props.show || show)
	}

	componentWillUnount(){
		Base.removeEvent(window, 'resize', this.handlerResize);
	}

	render(){
		//console.log(this.props,'props');
		let wrapStyle = {};
		let { style={}, show, dialogClassName, children} = this.props;

		let { zIndex, ...rest } = style;

		if (zIndex !== undefined) {
			wrapStyle.zIndex = zIndex;
		}
		
		wrapStyle.display = show ? 'block':'none';
		let className = `rc-dialog${dialogClassName?' '+dialogClassName:''}`;
		
		return(
			<div>
				<div 
					className="rc-dialog-mask" 
					style={wrapStyle}
				/>
				<div className="rc-dialog-wrap" style={wrapStyle} onClick={this.onMask}>
					<div ref="rcDialog" className={className} style={rest} onClick={this.onClickDialog}>
						<button className="rc-dialog-close" onClick={this.close}>×</button>
						<div className="rc-dialog-content">
							{children}
						</div>
					</div>
				</div>
			</div>
			)
	}
}

Dialog.propTypes = {
	show: PropTypes.bool,
	style: PropTypes.object,
	onClick: PropTypes.func,
	wrapClassName: PropTypes.string
}

Dialog.defaultProps = {
}

export default Dialog;