// core components for Admin layout
import Home from './component/Home';
import SignUp from './component/auth/SignUp';
import Login from './component/auth/LogIn';

const routes = [
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
        layout: ""
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        layout: ""
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        layout: ""
    }
]

export default routes;