import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const user = {
  isConnected: true,
  role: ["admin", "user"],
};

export const Hoc = (Component, inRole) => {
  const AuthComponent = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      if (!user.isConnected) {
        return navigate("/login");
      } else {
        if (
          !inRole ||
          (inRole && !inRole.some((role) => user.role.includes(role)))
        ) {
          return navigate("/unauthorized");
        }
      }
    }, [navigate]);
    return <Component {...props} />;
  };
  return AuthComponent;
};
