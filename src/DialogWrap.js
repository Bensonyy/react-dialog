/**
 * DialogWrap.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */

import './dialog.scss'
import Dialog from './Dialog'

class DialogWrap extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.show&&!this.props.show) {
			this.renderDialog(nextProps);
		}
		if (this.props.show) {
			this.renderDialog(nextProps);
			if (!nextProps.show) { 
	            ReactDOM.unmountComponentAtNode(this.wrap); //调用 unmountComponentAtNode 将wrap解除。
	            // 删除 wrap
	            document.getElementsByTagName('body')[0].removeChild(this.wrap);
	            this.wrap = null;
	        }
        }

	}

	renderDialog(nextProps){
		if (!this.wrap) {
			this.wrap = document.createElement('div');
			document.getElementsByTagName('body')[0].appendChild(this.wrap);
		}
		const dialog = (
				<Dialog {...nextProps} />
			)

		ReactDOM.render(dialog, this.wrap);
	}

	render(){
        return null
    }
}

export default DialogWrap