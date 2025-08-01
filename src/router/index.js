import RouteList from "./routes";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {RouteList.map((item) => (
        <Route key={item.path} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};

export default Router;
