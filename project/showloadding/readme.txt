
Jquery之ShowLoading遮罩组件

一、遮罩用途及效果

    ShowLoading这个jQuery插件设计用于当运行Ajax请求时，可以在屏幕某一特殊区域(id,class或者html标签)覆一张正在加载中的图片。

    有时候我们页面调用后台程序时间比较长时，前台页面暴露在用户之下，如果用户点击可能会造成逻辑混乱。这时候，遮罩就起到了很好的效果，在触发后台程序时我们将前台页面遮住，不让操作，同时给予一个程序运行请等待的效果。

遮罩效果：

二、JQuery遮罩UI实现

引用文件：（下载地址）

showLoading.css

jquery.showLoading.js

<link href="style/showLoading.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery.showLoading.min.js"></script>
三、使用方法

假设html页面有有一个class为add_test_img的标签，需要通过ajax访问后台，并在add_test_img标签中显示一些相关内容，在内容显示之前，可对add_test_img标签使用遮罩，防止在数据显示之前，被修改其中的内容