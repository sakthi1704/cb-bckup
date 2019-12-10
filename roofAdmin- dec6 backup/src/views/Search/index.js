import React, { Component } from "react";
import { search } from "./utils";
import SearchMenu from './SearchMenu';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";


class SearchComp extends Component {
  state = {
      searchValue: null,
      loading: false,
      currentValue: []
  };

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `https://api.themoviedb.org/3/search/movie?query=${val}&api_key=dbc0a6d62448554c27b6167ef7dabb1b`
    );
    const searchValue = results;

    this.setState({ searchValue, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ currentValue: e.target.value });
  };

  get renderMovies() {
    let movies = <h1 />;
    if (this.state.searchValue) {
      movies = <SearchMenu list={this.state.searchValue} />;
    }

    return movies;
  }
  handleClickShowPassword(){
    this.setState({ currentValue: "" });
  }
  render() {
    return (
            <Grid>
            <MenuItem   style={{textAlign:"center"}}>
              <TextField 
              type="search" 
              placeholder='Search for company, employee, jobs...'  
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon
                      onClick={this.handleClickShowPassword}
                    >
                    </SearchIcon>
                  </InputAdornment>
                )
        }}
               value={this.state.currentValue}
               onChange={e => this.onChangeHandler(e)}/>
              </MenuItem>  <br />
              {this.renderMovies}
          </Grid>
  
    );
  }
}

export default SearchComp;
