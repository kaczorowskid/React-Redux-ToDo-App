import React, { Component } from 'react';
import { add_item, remove_item, updateValue, clickItem } from '../action/action'
import { connect } from 'react-redux';
import Result from '../components/Results';
import styled from 'styled-components';


const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const AppInputArea = styled.input`
    color: white;
    width: 90%;
    height: 3.5vh;
    font-size: 24px;
    border-top: none;
    border-left: none;
    border-right: none;

   &:focus{
       border-bottom: 2px solid #3872a6;
   }
`;

const ButtonAddItem = styled.button`
    color: white;
    width: 70px;
    border: none;
    background-color: #6767df;
    border-radius: 8px;
    
    &:hover{
        background-color: #3a3a95;
    }
`;

const ResultContainer = styled.div`
    margin: 30px 0 0 0;
`;

class Item extends Component {

    render() {
        return (
            <div>
                <InputContainer>
                    <AppInputArea
                        placeholder="Add ToDo"
                        onChange={e => this.props.updateValue(e.target.value)}
                        value={this.props.item_name} />
                    <ButtonAddItem onClick={this.props.item_name !== "" ? () => this.props.add_item() : null} >Add</ButtonAddItem>
                </InputContainer>
                <ResultContainer>
                    {this.props.myObject.map((item, index) => (
                        <div key={item.id} >
                            <Result
                                remove={() => this.props.remove_item(item.id)}
                                click={() => this.props.clickItem(item.id)}
                                removeId={item}
                                clickedItem={item.clickedItem}
                                name={item.name}
                                done={item.done}
                                id={index + 1} />
                        </div>
                    ))}
                </ResultContainer>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({
    item_name: state.item_name,
    myObject: state.myObject,
    removeId: state.removeId,
    clickedItem: state.clickedItem
})

const mapDispatchToProps = {
    add_item,
    remove_item,
    updateValue,
    clickItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);