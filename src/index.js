// javascript原生库
// import _ from 'lodash'
// import Print from './print.js';
// import './styles.css';
// import {
//     cube
// } from './math.js';

function component() {
    // async function getComponent() {
    // return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
    //     var element = document.createElement('div');

    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //     return element;

    // }).catch(error => 'An error occurred while loading the component');


    var element = document.createElement('div');
    // const _ = await import( /* webpackChunkName: "lodash" */ 'lodash');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // return element;

    var element = document.createElement('div');
    // var br = document.createElement('br');

    // var btn = document.createElement('button');

    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // <script src="https://unpkg.com/lodash@4.16.6"></script>
    // Lodash, 现在通过 script 标签导入
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click me and check the console!';
    // element.onclick = Print.bind(null, 'Hello webpack!');
    // btn.onclick = printMe;

    // element.appendChild(btn);
    // element.appendChild(br);
    // var element = document.createElement('pre');
    // element.innerHTML = [
    //     'Hello webpack!',
    //     '5 cubed is equal to ' + cube(5)
    // ].join('\n\n');
    // return element;

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    // 懒加载
    // button.onclick = e => import( /* webpackChunkName: "print" */ './print').then(module => {
    //     var print = module.default;

    //     print();
    // });
    return element;
}

// getComponent().then(component => {
//     document.body.appendChild(component);
// })
document.body.appendChild(component());
// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
// document.body.appendChild(element);
// document.body.appendChild(component());

// 当 print.js 内部发生变更时可以告诉 webpack 接受更新的模块。
// if (module.hot) {
//     module.hot.accept('./print.js', function () {
//         console.log('Accepting the updated printMe module!');
//         // printMe();
//         document.body.removeChild(element);
//         element = component(); // 重新渲染页面后，component 更新 click 事件处理
//         document.body.appendChild(element);
//     })
// }