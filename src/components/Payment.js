import React from "react";
import "./payment.css";
import { useHistory } from "react-router-dom";



function Payment() {

    
const history = useHistory();

const routeChange = () =>{ 
let path = '/ticket'; 
history.push(path);
}
  return (
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-11">
          <div class="card card0 rounded-0">
            <div class="row">
              <div class="col-md-5 d-md-block d-none p-0 box">
                <div class="card rounded-0 border-0 card1" id="bill">
                  <h3 id="heading1">Payment Summary</h3>
                  <div class="row">
                    <div class="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 class="bill-head">Trip 1</h2>{" "}
                      <small class="bill-date">2017 Feb 10 at 10:30 PM</small>
                    </div>
                    <div class="col-lg-5 col-4 mt-4">
                      <h2 class="bill-head px-xl-5 px-lg-4"> Alex to Cairo</h2>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-7 col-8 mt-4 line pl-4">
                      <h2 class="bill-head">Trip 2</h2>{" "}
                      <small class="bill-date">2017 Feb 25 at 11:30 PM</small>
                    </div>
                    <div class="col-lg-5 col-4 mt-4">
                      <h2 class="bill-head px-xl-5 px-lg-4">Cairo to Alex</h2>
                    </div>
                  </div>
                  <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
                  <div class="row" >
                    <div class="col-md-12 red-bg"  >
                      <p class="bill-date" id="total-label" >
                        Total Price
                      </p>
                      <h2 class="bill-head" id="total">
                         523.65 EGP
                      </h2>{" "}
                      <small class="bill-date" id="total-label">
                        Price includes all taxes
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-7 col-sm-12 p-0 box">
                <div class="card rounded-0 border-0 card2" id="paypage">
                  <div class="form-card">
                    <h2 id="heading2" class="text-danger">
                      Payment Method
                    </h2>
                    <div class="radio-group">
                      <div class="radio" data-value="credit">
                        <img
                          src="https://i.imgur.com/28akQFX.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>
                      <div class="radio" data-value="paypal">
                        <img
                          src="https://i.imgur.com/5QFsx7K.jpg"
                          width="200px"
                          height="60px"
                        />
                      </div>{" "}
                      <br />
                    </div>{" "}
                    <label class="pay">Name on Card</label>{" "}
                    <input
                      type="text"
                      name="holdername"
                      placeholder="Nouran saad"
                    />
                    <div class="row">
                      <div class="col-8 col-md-6">
                        {" "}
                        <label class="pay">Card Number</label>{" "}
                        <input
                          type="text"
                          name="cardno"
                          id="cr_no"
                          placeholder="0000-0000-0000-0000"
                          minlength="19"
                          maxlength="19"
                        />{" "}
                      </div>
                      <div class="col-4 col-md-6">
                        {" "}
                        <label class="pay">CVV</label>{" "}
                        <input
                          type="password"
                          name="cvcpwd"
                          placeholder="&#9679;&#9679;&#9679;"
                          class="placeicon"
                          minlength="3"
                          maxlength="3"
                        />{" "}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        {" "}
                        <label class="pay">Expiration Date</label>{" "}
                      </div>
                      <div class="col-md-12">
                        {" "}
                        <input
                          type="text"
                          name="exp"
                          id="exp"
                          placeholder="MM/YY"
                          minlength="5"
                          maxlength="5"
                        />{" "}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        {" "}
                        <input
                          style={{marginLeft:'200px'}}
                          type="submit"
                          value="MAKE A PAYMENT &nbsp; &#xf178;"
                          class="btn btn-info placeicon"
                          onClick={routeChange}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
