const Fifthcomponent = () => {
    // Variables enables us th create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some variables. Note: Variables are usually declared just before the return statement in Reactjs.
    let name = "Narukami Subaru";
    let age = 20;
    let message = "I love programming"

    return(
        <div className="Fifthcomponent">
            <h1>Welcome to my Fifth component</h1>
            <h5>My name is: {name}</h5>
            <h5>My age is: {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Fifthcomponent;

// Create Fourthcomponet.jsx, have two variables i.e weight