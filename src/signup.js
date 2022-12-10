import React from "react";
import { Component } from "react";

class Create extends Component
{
    render()
    {
        return(
            <div class="container">
            <div class="heading">
                <h1><center>Create Account</center></h1>
            </div>
            <div className="rectangle">
            <div class="field1">
            <h1 style="text-align: center">Name</h1>
            <input type="text" name="Name" id="n-box"></input>
            </div>
            <div class="field2">
            <h1>Password</h1>
            <input type="password" name="Password" id="p-box"></input>
            </div>
            <div class="field3">
            <h1>Email</h1>
            <input type="email" name="Email" id="e-box"></input>
            </div>
            <div class="field4">
            <h1>Mobile</h1>
            <input type="text" name="Mobile" id="m-box"></input>
            </div>
            </div>
            </div>
        )
    }
}
export default Create