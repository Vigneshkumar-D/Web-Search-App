import './App.css';
import SearchItems from './components/SearchItems'
import { Component } from 'react';
import { TbWorldSearch } from "react-icons/tb";
import { v4 as uuidv4 } from 'uuid';
import {ThreeDots} from 'react-loader-spinner'

import {MainContainer, 
        SearchBarContainer, 
        SearchList, 
        SearchBar,
        FailureViewContainer, 
        FailureImage, 
        FailureTitle, 
        FailureDescription, 
        RetryButton} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class App extends Component {
  state = {searchInput: '', searchResult: [], apiStaus: apiStatusConstant.initial}

  onSearch = async () => {
      const {searchInput} = this.state
      this.setState({apiStatus: apiStatusConstant.inProgress})
        const api = 'https://www.googleapis.com/customsearch/v1/'
        const apiKey = 'AIzaSyAxYRr1CufUSD5-KhUpHcWUjQ_OR3qKUDI';
        const cx = '65582fc252c8d480a'
        const url = `${api}?q=${encodeURIComponent(searchInput)}&key=${apiKey}&cx=${cx}`;        
        const response = await fetch(url);
        if(response.ok){
            this.setState({apiStatus: apiStatusConstant.success})
            const formatedData = await response.json();
            const slicedData = formatedData.items.slice(0,5);
            const updatedData = slicedData.map(eachItem => (
              {...eachItem, id: uuidv4()}
            ))
            this.setState({searchResult: updatedData}) 
        }else{
          this.setState({apiStatus: apiStatusConstant.failure})
        }
  }

  onChangeSearch = event => {
    const value = event.target.value
    if(event.key === "Enter"){
      this.onSearch()
    }else{
      this.setState({searchInput: value})
    }
  }

  successView = () => {
    const {searchResult} = this.state
    return(
      <>
          {searchResult.map(eachItem => (
            <SearchItems key={eachItem.id} eachItem = {eachItem} />
          ))}
    </>
    )
  }

  loadingView = () => (
    <div className="loader-container">
    <ThreeDots color="#3b82f6" height={50} width={50} />
  </div>
  )

  failureView = () => (
    <FailureViewContainer>
        <FailureImage src='https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' alt="failure view" />
        <FailureTitle>Oops! Something Went Wrong</FailureTitle>
        <FailureDescription>
          We are having some trouble to complete your request.
        </FailureDescription>
        <FailureDescription>Please try again!</FailureDescription>
        <RetryButton onClick={this.onSearch}>Retry</RetryButton>
      </FailureViewContainer>
  )

  renderPages = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.loadingView()
      case apiStatusConstant.failure:
        return this.failureView()
      case apiStatusConstant.success:
        return this.successView()
      default:
        return null
    }
  }

  render(){
    const {searchInput} = this.state
    return (
      <MainContainer>
        <SearchBarContainer>
        <SearchBar value={searchInput} type='search' placeholder="Search" 
        onChange={this.onChangeSearch} onKeyDown={this.onChangeSearch}/>
        <TbWorldSearch onClick={this.onSearch} className='search-icon'/>
        </SearchBarContainer>
          <SearchList>
            {this.renderPages()}
          </SearchList>
      </MainContainer>
  );
}
}

export default App
