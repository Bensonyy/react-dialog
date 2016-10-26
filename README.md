# react-dialog
react dialog component

# 截图
![image](https://github.com/yongbingz/react-dialog/blob/master/demo/screenshot/1.png)
![image](https://github.com/yongbingz/react-dialog/blob/master/demo/screenshot/2.png)

# Usage
Actual directory of dialog components in the import project, You may use it like this:

```
import Dialog from '../src/Dialog'

<Dialog
	visible
	style={style} 
	onClose={this.onClose}
	onClickMask
>
	<div>
		<p>react dialog demo</p>
	</div>
</Dialog>

```

Or

```
import Dialog from '../src/Dialog'

<Dialog
  visible={ this.state.visible }
  style={style} 
  onClose={this.onClose}
  closeVisible={false} //or closeContent:{ <div className="abc"></div> }
  onClickMask
>
  <div>
      <p>信息提示</p>
      <button>确定</button>
      <button>取消</button>
  </div>
</Dialog>

```


# API
Dialog props
<table>
    <thead>
    <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>visible</td>
          <td>Boolean</td>
          <td>false</td>
          <td>current dialog's status</td>
        </tr>
        <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>dialog's style, e.g. { zIndex:10000, width:300, height:100 }</td>
        </tr>
        <tr>
          <td>wrapClassName</td>
          <td>String</td>
          <td></td>
          <td>dialog's wrap custom className</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>function(){}</td>
          <td></td>
          <td>callback when click close button or mask</td>
        </tr>
         <tr>
          <td>onClickMask</td>
          <td>Boolean</td>
          <td>false</td>
          <td>mask when click Whether to close </td>
        </tr>
        <tr>
          <td>maskOpacity</td>
          <td>Number</td>
          <td>.8</td>
          <td>Custom mask's transparency </td>
        </tr>
        <tr>
          <td>closeVisible</td>
          <td>Boolean</td>
          <td>true</td>
          <td>Whether to display the close button </td>
        </tr>
        <tr>
          <td>closeContent</td>
          <td>React.element</td>
          <td></td>
          <td>Custom close button </td>
        </tr>
    </tbody>
</table>

# Latest version
1.2.0

# License
MIT
