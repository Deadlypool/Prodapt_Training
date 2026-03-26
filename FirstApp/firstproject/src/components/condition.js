const conditionalRendering = ({isLoggedIn}) => {
    return(
        <div>
            {isLoggedIn ? <h1>Logged in!</h1> : <h1>Please Sign in.</h1>}
        </div>
    )
}

export default conditionalRendering;

//isLoggedin - prop passed to component
//Conditional rendering - rendering different elements based on a condition
