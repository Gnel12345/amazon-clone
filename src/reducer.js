export const initialState={
    basket:[],
    user:null
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
            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.Id === action.Id
                );
                let newBasket = [...state.basket];

                if(index >= 0 ){
                   newBasket.splice(index,1);

                } else{
                    console.warn(
`cant remove product ${action.id}`

                    )
                }

                return{
                    ...state,
                    basket:newBasket
                }

                case "SET_USER":
                    return{
                        ...state,
                        user:action.user
                    }
            default:
                return state;
    }
}

export default reducer;