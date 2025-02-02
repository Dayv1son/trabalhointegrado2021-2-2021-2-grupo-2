import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: '',
        };
    }

    render() {
        return (
            <div className="container">
                <div>
                    <form onSubmit={this.login}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div className="loginError">
                            {this.state.error}
                        </div>
                        <div className="loginButtons">
                            <div className="d-grid gap-2">
                                <Button type="submit" variant="outline-success">Entar</Button>
                                <Link href="/criar-conta" variant="outline-warning">Criar Conta</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    login = (event) => {
        event.preventDefault();
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        } else {
            this.setState({
                error: 'Preencha todos os campos'
            });
        }
    }
    
}

export default Login;