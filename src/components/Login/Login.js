import {useEffect, useState} from "react";
import axios from "axios";
import AuthService from "../../services/auth.service";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../../features/authSlice";

function Login() {
    const navigate = useNavigate();
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        username: "",
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
        if (name === "username") {
            setData({...data, username: evt.target.value});
        } else {
            setData({...data, password: evt.target.value});
        }
    }

    const submitLogin = (evt) => {
        // ngan viec submit form len server
        evt.preventDefault();
        AuthService.login(data.username, data.password).then(res => {
            localStorage.setItem("token", res.data.token);
            const userLogin = {
                username: data.username,
                token: res.data.token,
            }
            dispatch(setUser(userLogin))
            navigate("/dashboard")
        }).catch(err => {
            setError(err.response.data)
        })
    }

    return (
        <>
            { error && (<p>{error}</p>)}
            <form onSubmit={submitLogin}>
                Username:
                <input type="text" name="username" value={data.username} onChange={changeInput}/>
                Password:
                <input type="password" name="password" value={data.password} onChange={changeInput}/>
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;