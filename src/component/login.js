import "../App.css"
function Login(){
let emailValue="";
let passValue="";

function form(){
    console.log(emailValue);
    console.log(passValue);
}

    return(
        <div className="form">
            <label htmlFor="Name">Name</label>
            <input type="text" onChange={(e)=>{emailValue = e.target.value}} />
            <br /><br />

            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e)=>{passValue=e.target.value}} />
            <br /><br />

            <button onClick={form}>Submit</button>

            
        </div>
    )
}

export default Login;