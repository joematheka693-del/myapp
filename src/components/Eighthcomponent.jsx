import { useState } from "react";

const Eighthcomponent = () => {


    const [number, setNumber] = useState(50)

    return(
        <div className="Eighthcomponent">
            {/* Below we bind our value for number */}
            <h1>Welcome to my Eighth component</h1>

            <h2>Current weight is: {number}</h2>

            <button onClick={ () => setNumber(55)}>Click to update the weight</button>
        </div>
    )
}

export default Eighthcomponent;