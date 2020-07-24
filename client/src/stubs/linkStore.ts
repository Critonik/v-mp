export const initialState = {
    count: 0
};

export const reducer = (state: any, action: any): any => {
    switch (action.type) {
        case 'change':
            return {...state, count: action.payload}
        case 'add':
            return {...state, count: state.count + 1 >= 6 ? 0 : state.count + 1}
        case 'sub':
            return {...state, count: state.count -1  < 0 ? 5 : state.count -1}
        default:
            throw new Error();
    }
}