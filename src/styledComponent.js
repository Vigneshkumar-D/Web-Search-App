import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
height: 100vh;
background-size: cover;
`
export const SearchBarContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-top: 2%;
margin-top: 0px;
height: 8%;

`
export const SearchList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 5%;
margin-top: 15%;
padding-left: 0px;
`

export const SearchBar = styled.input`
height: 45px;
width: 400px;
border-top-left-radius: 8px;
border-bottom-left-radius: 8px;
border: 1px solid gray;
border-right: none;
outline: none;
padding-left: 10px;
font-size: 18px;
background-color: #ffffff;
box-shadow: -3px 3px 7px 3px #e2e8f0;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding-top: 15%;
  width: 95%;
`
export const FailureImage = styled.img`
  height: 200px;
  width: 250px;
`
export const FailureTitle = styled.h1`
  font-size: 25px;
  font-family: 'Roboto';
  color: #0f0f0f;
  font-weight: 500;
  text-align:center;
`

export const FailureDescription = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  color: #1e293b;
  font-weight: 500;
  line-height: 1;
  text-align:center;
`
export const RetryButton = styled.button`
  font-size: 15x;
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: 500;
  padding: 8px;
  width: 100px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #4f46e5;
`
export const SearchLogo = styled.img`
height: 170px;
width: 250px;
margin: 0px;
padding: 0px;
background-color: transparent;
`
export const Slogan = styled.p`
font-size: 13px;
padding: 0px;
margin: 0px;
font-weight: 600;
background-color: transparent;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  position:fixed;
  z-index: 1;
  width: 100%;
  background-color: #ffffff;
`