import { StackScreenProps } from "@react-navigation/stack";
import { LoginForm } from "../components/loginComponents/loginForm"
import { AppRouteProps, AppRoutes } from "../navigation/routes/app-routes";

// interface Props{
//     navigation: 
// }

export const MyLoginScreen =(props:StackScreenProps<AppRouteProps,AppRoutes.Login>)=>{
    
    const onPressNavigate = () => {
        props.navigation.navigate(AppRoutes.Home,{title:'dfdf'});
    }

    return <LoginForm onLoginPress={onPressNavigate}/>
}