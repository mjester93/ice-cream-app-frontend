import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label>Username</label>
                    <input placeholder="Username" name="username"/>
                </div>
                <div class="field">
                    <label>Password</label>
                    <input placeholder="Password" name="password" />
                </div>
            </form>
        </div>
    )
}

export default SignUp