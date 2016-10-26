/**
 * DialogWrap.js
 * @author  yongbing
 * @email   yongbingz@qq.com
 */

import './dialog.scss'
import DialogCore from './DialogCore'

class Dialog extends React.Component{
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps){
		if (nextProps.visible&&!this.props.visible) {
			this.renderDialog(nextProps);
		}
		if (this.props.visible) {
			this.renderDialog(nextProps);
			if (!nextProps.visible) { 
	            ReactDOM.unmountComponentAtNode(this.wrap); //调用 unmountComponentAtNode 将wrap节点中挂载的组件移除。
	            // 删除 wrap
	            this.doc.getElementsByTagName('body')[0].removeChild(this.wrap);
	            this.doc = null;
	            this.wrap = null;
	        }
        }

	}

	renderDialog(nextProps){
		if (!this.wrap) {
			this.wrap = this.doc.createElement('div');
			this.doc.getElementsByTagName('body')[0].appendChild(this.wrap);
		}
		const dialog = (
				<DialogCore key="dialog" {...nextProps} />
			)

		ReactDOM.render(dialog, this.wrap);
	}

	render(){
		this.doc=document;
        return null
    }
}

export default Dialog