# react-dialog
react dialog component

# 截图
![image](https://github.com/yongbingz/react-dialog/blob/master/demo/screenshot/1.png)
![image](https://github.com/yongbingz/react-dialog/blob/master/demo/screenshot/2.png)

# Usage
import项目中dialog组件的实际目录

```
import Dialog from '../src/DialogWrap'

<Dialog
	show
	style={style} 
	onClose={this.onClose}
	onClickMask
>
	<div>
		<p>react dialog demo</p>
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
          <td>show</td>
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
          <td>dialogClassName</td>
          <td>String</td>
          <td></td>
          <td>dialog's custom className</td>
        </tr>
        <tr>
          <td>onClose</td>
          <td>function(){}</td>
          <td></td>
          <td>callback when onclick close button or mask</td>
        </tr>
         <tr>
          <td>onClickMask</td>
          <td>Boolean</td>
          <td>false</td>
          <td>mask when onclick Whether to close </td>
        </tr>
    </tbody>
</table>


# License
MIT
