import axios from "axios";

class AuthService {
    static async login(username, password) {
        return await axios.post("https://fakestoreapi.com/auth/login", {
            username: username,
            password: password
        })
    }
}

export default AuthService;