import { Outlet, Link, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  //?Aslinda bu bilgi Global state'den okunacak
  const isAuthenticated = true;
//   const navigate = useNavigate();

  return isAuthenticated ? <Outlet/> : <Navigate to='/'/>
};

export default PrivateRouter;
