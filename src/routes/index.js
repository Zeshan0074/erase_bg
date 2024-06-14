import Login from '../views/auth/Login';
import Signup from "../views/auth/Signup"
import VerifyOtp from "../views/auth/VerifyOtp"
import PaymentCards from "../components/dashboard/PaymentCards"
import PurchasedApi from "../components/dashboard/PurchasedApi"
import ApiDocumentation from "../components/dashboard/ApiDocumentation";
import Stats from "../components/dashboard/Stats";

let routes = [
	{
		path: '/auth/signup',
		component: Signup,
		layout: 'auth',
	},


	{
		path: '/auth/login',
		component: Login,
		layout: 'auth',
	},
	{
		path: '/auth/verifyotp',
		component: VerifyOtp,
		layout: 'auth',
	},
	{
		path: '/',
		component: PurchasedApi,
		layout: 'main',
	},
	{
		path: '/payment-cards',
		component: PaymentCards,
		layout: 'main',
	},
	
	{
		path: '/api-documentation',
		component: ApiDocumentation,
		layout: 'main',
	},
	{
		path: '/stats',
		component: Stats,
		layout: 'main',
	},

];
export default routes;