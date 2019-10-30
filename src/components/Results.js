import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const ItemContainer = styled.div`
    width: 100%;
    height: 2vh;
    background-color: #522c71;
    margin: 10px 0;
    padding: 10px 0;
    border-radius: 5px;

    display: grid;  
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: 33% 33% 33%;
`;

const ResultName = styled.span`
    color: ${props => props.primary ? "green" : "#ffd5d5"};
    text-decoration: ${props => props.primary ? "line-through" : "none"};
    background: none;
    text-align: center;
    grid-area: 1 / 2 / 2 / 3;
`;

const NumberItem = styled.span`
    margin-left: 20px;
    color: white;
    background: none;
`;

const DeleteIten = styled.span`
    color: white;
    display: ${props => props.primary ? "flex" : "none"};
    align-items: center;
    justify-content: center;
`;

const TrashContainer = styled.div`
    margin: 0 0 0 10px;
`;


class Result extends Component {
    render() {
        return (
            <>
                <Container>
                    <ItemContainer onClick={this.props.click} primary={this.props.done}>
                        <NumberItem>{`${this.props.id}.`}</NumberItem>
                        <ResultName primary={this.props.done}> {this.props.name} </ResultName>
                    </ItemContainer>
                    <DeleteIten primary={this.props.clickedItem}>
                        <TrashContainer onClick = {this.props.remove}>
                            <i style={{ color: "white", width: "40px", height: "25px" }} className="fas fa-trash-alt"></i>
                        </TrashContainer>
                    </DeleteIten>
                </Container>

            </>
        )
    }
}


export default Result;