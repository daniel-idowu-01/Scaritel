import { React, useState } from "react";
import wrap from "../assests/icons/wrap.png";




function SingleQuestion ({ text, info }) {

    const [show, setShow] = useState(false);
    return (
        <div className="">
                 <header>
                    <h1>{text}</h1>
                    {show && <p>{info}</p>}
                 </header>
                 <button onClick={() => setShow(!show)}>
                     <img src={wrap} alt="wrap" />
                 </button>
        </div>
    )
}


export default SingleQuestion;