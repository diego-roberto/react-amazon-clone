export const initialState = {
    basket: [],
    user: null
};

//selector
export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    // o reducer está sempre observando (<StateProvider initialState={initialState} reducer={reducer}>)
    
    console.log(action); //verificar ação no console do developer tools do browser | TODO: remover isto depois...

    switch(action.type) {
        case "ADD_TO_BASKET":
            return {                
                ...state,                               //qualquer que seja o estado
                basket: [...state.basket, action.item], //basket deve ser = o estado em que estava + a ação (add ou rem item)
            };  

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
        
            if (index >= 0) {
                newBasket.splice(index, 1);
        
            } else {
                console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket!`
                )
            }
        
            return {
                ...state,
                basket: newBasket
            }  
                
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }

        default:
            return state;
    }
};

export default reducer;