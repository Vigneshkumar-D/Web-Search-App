import styled from 'styled-components'

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 3px 7px 3px #e2e8f0;
    margin: 15px;
    padding: 15px;
    width:80%;
    border-radius: 8px;
    background-color: #ffffff;
`
export const Title = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: #006621;
    cursor: pointer;
` 
export const Anchor = styled.a`
    text-decoration: none;
    cursor: pointer;
`
export const Description = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: black;
`