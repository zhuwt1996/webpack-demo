// tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。
// 通过 package.json 的 "sideEffects" 属性作为标记，向 compiler 提供提示，表明项目中的哪些文件是 "pure(纯的 ES2015 模块)"，由此可以安全地删除文件中未使用的部分。
export function square(x) {
    return x * x;
}

export function cube(x) {
    return x * x * x;
}