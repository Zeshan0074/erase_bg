import { Provider } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Auth from "./layout/Auth";
import Main from "./layout/Main";
import routes from "./routes";
import store from "./store";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <>
            <Provider store={store}>
                <Toaster/>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route) => {
                            switch (route.layout) {
                                case "main":
                                    return (
                                        <Route exact path={route.path}>
                                            <Main>
                                                <route.component />
                                            </Main>
                                        </Route>
                                    );
                                case "auth":
                                    return (
                                        
                                            <Route exact path={route.path}>
                                                <Auth>
                                                    <route.component />
                                                </Auth>
                                            </Route>
                                       
                                    );
                            }
                        })}
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;

// import { Provider } from "react-redux";
// import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Auth from "./layout/Auth";
// import Main from "./layout/Main";
// import routes from "./routes";
// import store from "./store";
// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer } from "react-toastify";
// import Default from "./layout/Default";

// function App() {
//     return (
//         <>
//             <Provider store={store}>
//                 <ToastContainer />
//                 <BrowserRouter>
//                     <Switch>
//                         {routes.map((route) => {
//                             switch (route.layout) {
//                                 case "main":
//                                     return (
//                                         <Route exact path={route.path}>
//                                             <Main>
//                                                 <route.component />
//                                             </Main>
//                                         </Route>
//                                     );
//                                 case "auth":
//                                     return (
//                                         <Route exact path={route.path}>
//                                             <Auth>
//                                                 <route.component />
//                                             </Auth>
//                                         </Route>
//                                     );
//                                     case "default":
//                                         return (
//                                             <Route exact path={route.path}>
//                                                 <Default>
//                                                     <route.component />
//                                                 </Default>
//                                             </Route>
//                                         );
//                             }
//                         })}
//                         <Redirect to="/" />
//                     </Switch>
//                 </BrowserRouter>
//             </Provider>
//         </>
//     );
// }

// export default App;
