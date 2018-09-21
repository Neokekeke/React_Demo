
const panelControls = (state = { count: 1 }, action) => {
    const count = state.count
    switch (action.type) {
        case 'INCREASE':
            return {
                count: count + 1
            }
        case 'PLUS':
            return {
                count: count + parseInt(action.num) 
            }
        case 'MINUS':
            return {
                count: count - parseInt(action.num) 
            }
        case 'MUTIPLY':
            return {
                count: count * parseInt(action.num) 
            }
        case 'DIVIDE':
            return {
                count: count / parseInt(action.num) 
            }
        default:
            return state
    }
}

export default panelControls