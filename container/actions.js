const plus = (num) => ({
    type : 'PLUS',
    num
})

const minus = (num) => ({
    type : 'MINUS',
    num
})

const multiply = (num) => ({
    type : 'MUTIPLY',
    num
})

const divide = (num) => ({
    type : 'DIVIDE',
    num
})

const increase = () => ({
    type : 'INCREASE'
})  

export {
    plus,
    minus,
    multiply,
    divide,
    increase
}