import {Link} from "react-router-dom"

function Home() {
    return (
        <>
            Home Page
            <Link to={"/sign-up"}>Signup</Link>
        </>
    )
}

export default Home