export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    // o reducer está sempre observando (<StateProvider initialState={initialState} reducer={reducer}>)
    
    console.log(action); //verificar ação no console do developer tools do browser | TODO: remover isto depois...

    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {                
                ...state,                               //qualquer que seja o estado
                basket: [...state.basket, action.item], //basket deve ser = o estado em que estava + a ação (add ou rem item)
            };  
        default:
            return state;
    }
};

export default reducer;