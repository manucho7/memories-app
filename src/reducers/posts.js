
export const postReducer = (posts = [] , action) => {

    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...postReducer, action.payload];

        default:
            return posts;
    }
}