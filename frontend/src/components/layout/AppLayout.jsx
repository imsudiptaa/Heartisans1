import { Outlet, useNavigation } from "react-router-dom"
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const AppLayout = () => {
	const navigation = useNavigation();
	// console.log(navigation);
	// if(navigation.state === 'loading'){
	// 		return <Loader/>
	// }
	return(
		<>
			<Navbar/>
			<Outlet/>
			<Footer/>
		</>
	)
}