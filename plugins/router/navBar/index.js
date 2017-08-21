// 默认值
const DEFAULTS = {
    // [全局/页面]是否显示 navBar，默认显示
    isShow: true,
    // [页面]标题，默认空字符串
    title: '',
    // [全局/页面]颜色，默认白色
    color: '#fff',
    // [全局/页面]背景色，默认 蓝
    backgroundColor: '#3e50b5',
    // [全局/页面]左侧按钮文字，默认 '返回'
    leftButtonText: '返回',
    // [页面]右侧按钮默认文字
    rightButtonText: '',
    // [全局]点击默认不透明度
    activeOpacity: 0.6,
    // [全局]默认动画时间
    animatedDuration: 400,
    height: weex.config.env.platform == 'android' ? 100.0 : 64.0
};
export default DEFAULTS;
