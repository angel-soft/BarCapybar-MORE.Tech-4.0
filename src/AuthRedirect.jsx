import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AuthRedirect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.root.isAuth);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [dispatch, isAuth, navigate]);

  return null;
};
