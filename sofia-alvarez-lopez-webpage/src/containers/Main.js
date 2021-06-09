import React, { Component } from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";

const selectedLanguage = "english";


export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = { language: selectedLanguage };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newLanguage = "";
    if (this.state.language === "spanish") {
      newLanguage =  "spanish";
    }
    else if (this.state.language === "german") {
      newLanguage = "german";
    }
    else if (this.state.language === "french") {
      newLanguage = "french"
    }
    else {
      newLanguage = selectedLanguage;
    }
    this.setState({ language: newLanguage })
  }
  render() {
    const theme = this.props.theme;
    console.log(theme);
      return (
        <div>
          <HashRouter basename="/">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
              <Route
                path="/home"
                render={(props) => <Home {...props} theme={this.props.theme} />}
              />
            </Switch>
          </HashRouter>
        </div>
      );
  }
}
