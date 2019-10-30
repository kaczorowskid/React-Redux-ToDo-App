import {ADD_ITEM, REMOVE_ITEM, UPDATE_VALUE, CLICK_ITEMS} from "../action/action_str";

const initialState = {
    item_name: "",
    clkItem: 0,
    newId: 4,
    myObject: [
        {id: 0, name: "Test 1", done: false, clickedItem: false},
        {id: 1, name: "Test 2", done: false, clickedItem: false},
        {id: 2, name: "Test 3", done: false, clickedItem: false},
        {id: 3, name: "Test 4", done: false, clickedItem: false},
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return{
                ...state,
                newId: state.newId + 1,
                myObject: [
                    ...state.myObject,
                    {
                        id: state.newId,
                        name: state.item_name,
                        done: false,
                        clickedItem: false
                    }
                ],
                item_name: ""
            }
        case UPDATE_VALUE:
            return{
                ...state,
                item_name: action.item_name
            }

        case CLICK_ITEMS:
             return{
                 ...state,
                myObject: state.myObject.map(item => {
                    if(item.id !== action.clkItem) {
                        return item;
                    }
                    return {
                        ...item,
                        clickedItem: !item.clickedItem,
                        done: !item.done
                    }
                })
             }

        case REMOVE_ITEM:
            return{
                ...state,
                myObject: state.myObject.filter(item => action.removeId !== item.id)
            }

        default:
            return state;
    }
};

export default reducer;