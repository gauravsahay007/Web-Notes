import React, { useState } from 'react'

const Signup = () => {
    const [signUpCreds, setSignUpCreds] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const handleSignUp = (e) => {
        e.preventDefault();
        //console.log(signUpCreds);
        const { name, email, password } = signUpCreds;
        fetch('http://localhost:4000/api/v1/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error);
                    // console.log(data.error);
                    // console.log(data.message);
                } else {
                    localStorage.setItem('token', data.authToken);
                    console.log(data.authToken);
                    window.location.href = '/';
                }
            }
            )
            .catch(err => console.log(err));

    }
    return (
        <div className="container">
            <form onSubmit={handleSignUp}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" value={signUpCreds.name} onChange={
                        (e) => {
                            setSignUpCreds({
                                ...signUpCreds,
                                name: e.target.value
                            })
                        }
                    } aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email id</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={signUpCreds.email}
                        onChange={(e) => {
                            setSignUpCreds({
                                ...signUpCreds,
                                email: e.target.value
                            })
                        }
                        } aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={signUpCreds.password}
                        onChange={(e) => {
                            setSignUpCreds({
                                ...signUpCreds,
                                password: e.target.value
                            })
                        }
                        } id="exampleInputPassword1"
                        minLength="6"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmpass" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" value={signUpCreds.confirmPassword}
                        onChange={(e) => {
                            setSignUpCreds({
                                ...signUpCreds,
                                confirmPassword: e.target.value
                            })
                        }
                        } id="confirmpass" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form >
        </div >
    )
}

export default Signup