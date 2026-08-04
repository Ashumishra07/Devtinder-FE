/* eslint-disable react-hooks/immutability */

import axios from "axios"
import { BASE_URL } from '../utils/constants';
import { useState,useEffect } from "react";

const Premium = () => {

    const[isPremium,setIsPremium] = useState(false)
    let styles ={
        color:"red",
        backgroundColor:"yellow"
    }

    useEffect(() => {
    verifyisPremium();
    },[]);
    
    const verifyisPremium = async () => {
         const res = await axios.get(BASE_URL +"/premium/verify",{
            withCredentials:true
         })
         if(res.data.isPremium){
            setIsPremium(true)
         }
         console.log("verifyisPremium:",res)
    }


    const handleBuyClick = async (membershipType) => {
        // Handle the buy button click event here
        const order = await axios.post(BASE_URL + "/payment/create",
            {
                membershipType: membershipType,
            },
            {
                withCredentials: true
            },

        );
        console.log("order:", order);

    const { amount, keyId, currency, notes, orderId } = order.data;
    console.log("amount:", amount);

    const options = {
      key: keyId,
      amount: amount,
      currency: currency,
      name: "Dev Tinder",
      description: "Connect to other developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyisPremium,
    };
    console.log("options:", options);

    const rzp = new window.Razorpay(options);
    console.log("Ready rzp")
    rzp.open();
    }
    return isPremium ? ("You are already a Premium User!"):(
         <div className="flex w-full m-10 ">
            <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center" style={styles} >
                <h1 className="font-bold 3xl">Silver MemberShip</h1>
                <ol>
                    <li>-100 Request per day</li>
                    <li>-Premium Badge or Blue Tick</li>
                    <li>-Limited Access to chat</li>
                </ol>
                <button className="btn btn-secondary" onClick={() => handleBuyClick("silver")}>Buy Silver</button>
                </div>
            <div className="divider divider-horizontal">OR</div>

            <div className="card bg-base-300 rounded-box grid h-80 grow place-items-center">
                <h1 className="font-bold 3xl">Gold MemberShip</h1>
                <ol>
                    <li>-Unlimited Request per day</li>
                    <li>-Premium Badge or Blue Tick</li>
                    <li>-Access to chat Infinite</li>
                </ol>
                <button className="btn btn-primary" onClick={() => handleBuyClick("gold")}>Buy Gold</button>
                </div>
        </div>)
    
};

export default Premium