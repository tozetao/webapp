起点

我的书架页面
1. 顶部和底部是fixed
2. 中间内容可以滑动。



/*
scrollHeight: 元素自身高度，包含看不见的内容。
clientHeight: 元素自身高度，包含padding。
scrollTop: 滚动了多少距离。

上拉加载的触底判断：滚动的距离 + 元素自身高度 >= scrollHeight
*/