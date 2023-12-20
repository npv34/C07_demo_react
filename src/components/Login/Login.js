import {useEffect, useState} from "react";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("")

    useEffect(() => {
        // than ham
        console.log("Err thay doi ")
    }, [error]);


    useEffect(() => {
        console.log("data thay doi")
    }, [data])


    const  changeInput = (evt) => {
        const name = evt.target.name;
        if (name === "email") {
            setData({...data, email: evt.target.value});
        } else {
            setData({...data, password: evt.target.value});
        }
    }

    const submitLogin = (evt) => {
        // ngan viec submit form len server
        evt.preventDefault();
        if (data.email === "admin@gmail.com" && data.password === "1234") {
            setData({
                email: "",
                password: "",
            })
            setError("")
            alert("Login success")
        } else {
            setError("Account not exist!")
        }

    }

    return (
        <>
            { error && (<p>{error}</p>)}
            <form onSubmit={submitLogin}>
                Email:
                <input type="email" name="email" value={data.email} onChange={changeInput}/>
                Password:
                <input type="password" name="password" value={data.password} onChange={changeInput}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;