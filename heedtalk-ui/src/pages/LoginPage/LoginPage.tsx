import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm"
import Logo from "../../components/Logo/Logo"
import PunchLine from "../../components/PunchLine/PunchLine"
import DashboardPage from "../DashboardPage/DashboardPage"
import "./LoginPage.css"


const LoginPage = () => {
    const navigate = useNavigate()

    const login = useCallback(() => {
        console.log("loginbuttonisclicked")
        navigate("./dashboard")
    }, [])
    
    return <div className="LoginPage LoginPageDesktop" style={{backgroundImage:`url(/assets/BACKGROUND/Bg.png)`}}>
        {/*     <div>This is login page</div>
            <button onClick={login}>Login</button> */}
            <div className="LoginPageHeader">
                <div className="LoginPageLogo">
                    <Logo></Logo>
                </div>
            </div>
            <div className="LoginPageMainContent">
                <div className="LoginPagePunchLine">
                    <PunchLine></PunchLine>
                </div>
                <div className="LoginPageForm">
                    <LoginForm></LoginForm>
                </div>
                
            </div>
    </div>

}
export default LoginPage