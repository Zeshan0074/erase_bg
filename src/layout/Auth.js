import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Auth = (props) => {
    const history = useHistory();
    const { user } = useSelector((state) => state.authUser);

    useEffect(() => {
        if (user?.token) {
            history.push("/");
        }
    }, [user?.token]);
    return (
        <>
            <div>
                {props.children}
            </div>
        </>
    );
};

export default Auth;

