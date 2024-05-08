import React from "react";

export default ContactUs=()=>{
    return (
        <div>
            <h1 className="p-4 m-4 font-bold text-3xl text-center">Contact Us</h1>
            <form className="flex flex-col items-center mx-auto" action="">
                <input className="border-gray-400 border rounded-md text-center p-2 m-2" type="text" placeholder="name"/>
                <input className="border-gray-400 border rounded-md text-center p-2 m-2" type="text" placeholder="message"/>
                <button className="bg-blue-600 py-1 text-white rounded-lg px-2 m-2" type="submit">Submit</button>
            </form>
        </div>
        )
}
