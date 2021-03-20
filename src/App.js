import "./App.css";
import "bulma/css/bulma.css";
import { Title } from "./components/Title";
import { SearchForm } from "./components/SearchForm";
import React, { Component } from "react";
import { MovieList } from "./components/MovieList";


class App extends Component {
  state = {
    results: [],
    userdSearch:false,
    };
 
  _handleResults=(values)=>{

    this.setState({results:values,userdSearch:true})
  }

  _renderResults = ()=>{
    const {results}=this.state

    return results.length === 0 ? (
      <p>Sorry! <b>😥</b> Results no found! </p>
    ) : <MovieList movies={this.state.results}/>
    
  }

  
  render() {
    
    return (
      <div className="App">
        <Title> Search Movies</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}/>
        </div>
        { this.state.userdSearch?
          this._renderResults():
          <small>Use the form to search a movie</small>
        }
       
      </div>
    );
  }
}

export default App;
