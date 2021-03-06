import React, {Component} from 'react';
import LoadingData from "../loading-data/LoadingData";
import '../../../sass/style.scss';

class LogIn extends Component
{
    state =
        {
            uLogin: "",
            log: "",
            uPassword: "",
            pass: "",
            submit: "",
            styleLogInBtn: {},
            styleGoBackBtn: {},
            goBack: false
        };

    HandleChangeLogin = (e) =>
    {
        const {usersLogIn} = this.props;
        this.setState({
            uLogin: e.target.value,
        });
    };

    HandleChangePassword = (e) =>
    {
        const {usersLogIn} = this.props;
        this.setState({
            uPassword: e.target.value,
        });

    };

    SubmitLogIn = (e) =>
    {
        const {pass, log, submit, uPassword, uLogin} = this.state;
        const {usersLogIn} = this.props;
        e.preventDefault();

        this.setState({
            pass: false,
            log: false
        });

        for (let i = 0; i < usersLogIn.length; i++)
        {
            if((usersLogIn[i].password === uPassword) && (usersLogIn[i].login === uLogin))
            {
                this.setState({
                    pass: true,
                    log: true,
                    submit: true
                });
                this.props.setLogin(this.state.uLogin);
                break;
            }
            else if(submit === "")
            {
                this.setState({
                    submit: false
                })
            }
        }
    };

    HandleGoBackBtn = (e) => {
        e.preventDefault();
        this.props.isGoBackLog();
    };

    render() {
        const {usersLogIn} = this.props;
        const {submit} = this.state;
        return(
            <>
                <div className="lor-background">
                    {(submit !== true) ?
                        <>
                            <form onSubmit={this.SubmitLogIn}>
                                <label>LOGIN</label>
                                <input type="text"
                                       name="login"
                                       value={usersLogIn.login}
                                       placeholder="your login"
                                       onChange={this.HandleChangeLogin}/>
                                <label>PASSWORD</label>
                                <input type="password"
                                       name="password"
                                       value={usersLogIn.password}
                                       placeholder="your password"
                                       onChange={this.HandleChangePassword}/>
                                <input type="submit"
                                       className="submit lor-btn-small"
                                       value="LOG IN"/>
                                <button className="back-btn lor-btn-small"
                                        onClick={this.HandleGoBackBtn}>
                                        <i className="fas fa-chevron-left"/> GO BACK
                                </button>
                                <div className="lor-error-info">
                                    {(submit === false) && <h3>Invalid login or password</h3>}
                                </div>
                            </form>
                        </> :
                        <>
                            <LoadingData setLogStatus={this.props.setLogStatus}/>
                        </>}
                    </div>
                 </>
            )
        }
}

export default LogIn;