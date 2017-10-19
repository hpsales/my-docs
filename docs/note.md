
# 移动端自带滚动条的平滑滚动
``` bash
-webkit-overflow-scrolling: touch;
overflow: auto;
```

# 移动端的hover和active
> 在移动端使用:hover和:active制作按钮点击变色效果会失效，使用下面的代码可以修复
``` bash
document.body.addEventListener('touchstart', function () { }); 
```

# 函数节流、函数去抖
``` bash
var _debounce = function(action, delay) {
    var timer = null;
    return function() {
        var self = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            action.apply(self, args)
        }, delay);
    }
}

var _throttle = function(action, delay){
    var statTime = 0;
    return function() {
        var currTime = +new Date();
        if (currTime - statTime > delay) {
            action.apply(this, arguments);
            statTime = currTime ;
        }
    }
}
```

# 汉字两端对齐效果
``` bash
<div class="xxx">
  分厘卡三季稻法律健康
</div>
```

``` bash
.xxx{
    display: inline-block;
    width: 500px;
    overflow: hidden;
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
    -moz-text-align-last: justify;
    -webkit-text-align-last: justify;
}
.xxx:after{
    content: "";
    width: 100%;
    display: inline-block;
}
```

# 页面的footer部分总是出现在浏览器最底端
``` bash
<div class='example'>
  <div id='layout'>
    <div id='header'><h1>Sticky Footer Example</h1></div>
    <p>This is the main content area.</p>
    <p>In this example you should pretend that the red box is actually the browser window.</p>
    <p>Because, being a contrived example, it's not actually sticking to the bottom of the page.</p>
    <div id='layout_footer'></div>
  </div>
  <div id='footer'>This is the footer area.</div>
</div>
```

``` bash
html, body {
    height: 100%;
}
#layout {
    clear: both;
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin-bottom: -72px;
}
#layout #layout_footer {
    height: 72px;
}
#footer {
    clear: both;
    position: relative;
    height: 72px;
}

/*---------------------------------------------*/

#header {
    background: #999999;
    height: 72px;
}
#footer {
    background: #cccccc;
}
.example {
    height: 500px;
    border: 3px solid red;
}
.example p {
    margin: 1em 0.5em;
}
```

# handlebarsStr.css.handlebars
> gulp.spritesmith 生成雪碧图样式的模板
``` bash
{{#sprites}}
.icon-{{name}}:before {
    content: " ";
    display: inline-block;
    background-image: url({{{escaped_image}}});
    background-position: calc({{px.offset_x}} / 2) calc({{px.offset_y}} / 2);
    width: calc({{px.width}} / 2);
    height: calc({{px.height}} / 2);
    background-size: calc({{px.total_width}} / 2) calc({{px.total_height}} / 2);
}
{{/sprites}}
```

# angular@1.x 自定义指令
> 注意：angular@1.x 自定义指令使用到异步数据 需要在指令link内 $watch内部scope的数据模型，才能监听到数据的变化。

# angular@1.x 在全局调用控制器里的模型
``` bash
function rewardcb(){
    var appElement = document.querySelector('[ng-controller="content"]');
    var $scope = angular.element(appElement).scope();
    $scope.getRewardList();/*改变了模型，想同步到控制器中，则需要调用$apply()*/
    $scope.$apply();
}
```

#  angular@1.x 获取服务
``` bash
function getAngularService(name){
    var $injector = angular.element("body").injector();
    return $injector.get(name);
}
```

# 
> 
``` bash
```