
export const postReducer = (posts = [] , action) => {

    switch (action.type) {

        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...postReducer, action.payload];

        case 'DELETE':
            //keep all posts except that post whose id matches the action.payload
            return posts.filter((post) => post._id !== action.payload );

        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

        default:
            return posts;
    }
}


