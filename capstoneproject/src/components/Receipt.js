import React from "react";
import { useLocation } from "react-router-dom";
import '../Receipt.css'

const Confirmation = (props) => {
    const location = useLocation();
    const formData = location.state.propData;

    if (!formData){
        console.log("There is nothing here!");
    }else{
        console.log(formData.name);
    }

    return (
        <div className="ReceiptBackground ReceiptCenter">
            <div>
            <h2>Thank you for booking your party with us!</h2><br/>
            <span className="ImportantText">Your Receipt:</span><br/>
            <span>Name: {formData.name}</span><br/>
            <span>Number of guests: {formData.guestAmount}</span><br/>
            <span>Date: {formData.date}</span><br/>
            <span>Time: {formData.time}</span><br/>
            <span>Email: {formData.email}</span><br/>
            <span>Phone: {formData.phone}</span><br/>
            <span className="ImportantText">We'll see you then!<br/>If there is any need to cancel/change the date, please give us a call</span>
        </div>
        </div>
    )
}

export default Confirmation;