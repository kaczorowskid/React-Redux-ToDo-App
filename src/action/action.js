import {ADD_ITEM, REMOVE_ITEM, UPDATE_VALUE, CLICK_ITEMS} from './action_str';

const add_item = () => {
    return {
        type: ADD_ITEM
    }
}

const remove_item = (value) => {
    return {
        type: REMOVE_ITEM,
        removeId: value
    }
}

const updateValue = (value) => {
    return {
        type: UPDATE_VALUE,
        item_name: value
    }
}

const clickItem = (value) => {
    console.log(value)
    return{
        type: CLICK_ITEMS,
        clkItem: value
    }
}

export {
    add_item,
    remove_item,
    updateValue,
    clickItem
}