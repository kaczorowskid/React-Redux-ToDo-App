import React, { Component } from 'react';
import Item from '../components/Item'
import styled from 'styled-components';


const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-columns: auto 75vw auto;
    grid-template-rows: auto 80vh auto;
`;

const Logo = styled.div`
    color: white;
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-family: 'Kalam', cursive;
    font-size: 40px;
    letter-spacing: 8px;
`;

const ItemConatiner = styled.div`
    grid-area: 2 / 2 / 3 / 3;
    padding: 10vh 0;
`;




class Todo extends Component {
    render() {
        return (
            <>
                <Container>
                    <Logo>
                        <i style={{ width: "60px", height: "60px" }} className="far fa-list-alt"></i>
                        ToDo App
                    </Logo>
                    <ItemConatiner>
                        <Item />
                    </ItemConatiner>
                </Container>
            </>
        )
    }
}

export default Todo;