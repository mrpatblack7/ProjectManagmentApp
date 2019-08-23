import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: " ",
        password: " ",
        firstName: " ",
        lastName: " "
    }
    handlChange = (capturingChangeAction) => {
        this.setState({
            [capturingChangeAction.target.id]: capturingChangeAction.target.value
        })
    }
    handleSubmit = (capturingChangeAction) => {
        capturingChangeAction.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className="container"> {/*container to hold my form */}
                <form onSubmit={this.handleSubmit} className="white"> {/*giving the form an action and also a color */}
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handlChange} /> {/*onChange an event hanlder, will capture user when the update or dete in the field*/}
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handlChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">First Name</label>
                        <input type="text" id="FirstName" onChange={this.handlChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handlChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignUp