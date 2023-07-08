import React, { useState } from 'react'

const Login = () => {
    const [loginCredentials, setLoginCredentials] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginCredentials);
        const { email, password } = loginCredentials;

        fetch('http://localhost:4000/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                    console.log(data.error);
                } else {
                    console.log(data.authToken);
                    localStorage.setItem('token', data.authToken);
                    window.location.href = '/';
                }
            }
            )
            .catch(err => console.log(err));
    }

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={loginCredentials.email}
                        onChange={(e) => {
                            setLoginCredentials({
                                ...loginCredentials,
                                email: e.target.value
                            })
                        }
                        }
                        id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control"
                        value={loginCredentials.password}
                        onChange={(e) => {
                            setLoginCredentials({
                                ...loginCredentials,
                                password: e.target.value
                            })
                        }
                        }
                        id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </div>
    )
}

export default Login