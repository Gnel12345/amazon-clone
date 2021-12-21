export const initialState={
    basket:[],
}

//Selector

export const getBasketTotal = (basket) =>
                    basket?.reduce((amount,item) => item.price + amount, 0)

const reducer =  (state,action) =>{
    console.log(action);

    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                //returns the state of what it originally was was
                ...state,
                //returns the original state of the basket  + what item we decided to add
                basket:[...state.basket,action.item]
            }
            default:
                return state;
    }
}

export default reducer;