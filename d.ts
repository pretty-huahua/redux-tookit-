let tom: [string, number] = ['', 0]
tom = ['Tom', 25]
tom.push('male') //不报错 类型为字符串属于数组元素的联合类型
// tom.push(true);//报错,当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
console.log(tom)
