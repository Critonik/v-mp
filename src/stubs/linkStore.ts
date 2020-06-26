export const initialState = {
    count: 0
};

export function reducer(state: any, action: any) {
    switch (action.type) {
        case 'change':
            return {
                count: action.payload
            };
        default:
            throw new Error();
    }
}