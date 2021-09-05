import React from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function CreateAccount() {

	const history = useHistory();

	const routeChange = () =>{ 
    let path = '/'; 
    history.push(path);
  }

  return (
    <div>
      <form style={{marginLeft:'450px'}}>
        <Card style={{marginTop:'80px', width:'50%', paddingRight:'100px', paddingLeft:'100px',paddingBottom:'100px'}}>
          <h2 style={{marginTop:'30px',marginBottom:'30px'}}>Register</h2>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
							style={{marginBottom:'10px'}}
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
							style={{marginBottom:'10px'}}
            />
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="username"
              className="form-control"
              placeholder="Enter username"
							style={{marginBottom:'10px'}}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
							style={{marginBottom:'10px'}}
            />
          </div>
					<br></br>
          <button type="submit" class="btn btn-primary" onClick={routeChange}>
          Sign Up
        </button>
          <p className="forgot-password text-right">
            Already registered <a href="/">log in?</a>
          </p>
        </Card>
      </form>
    </div>
  );
}

export default CreateAccount;