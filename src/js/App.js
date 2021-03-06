import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';

import PageMain from "./components/page-main/PageMain";
import PageDressTree from "./components/page-dress-tree/PageDressTree";

import './../sass/style.scss';

class App extends Component
{
    state =
        {
            login: ""
        };

    setLogin = (user) =>
    {
        this.setState({
            login: user
        })
    };

    setClearLogin = () =>
    {
        this.setState({
            login: "",
        })
    };


    render() {
        return (
            <HashRouter>
                <>
                    <Route exact path='/'
                           render={() => <PageMain
                               setLogin={this.setLogin}
                               login={this.state.login}
                               setClearLogin={this.setClearLogin}/>} />
                    <Route path='/dress-your-tree'
                           render={() => <PageDressTree
                                login={this.state.login}
                                setClearLogin={this.setClearLogin}/>}/>
                </>
            </HashRouter>
        )
    }


}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
    );

