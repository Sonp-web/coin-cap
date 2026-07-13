import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomHeader from "./components/CustomHeader";
import Home from "./pages/Home";
import { Coin } from "./pages/Coin";
import { ROUTES } from "./routes";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CustomHeader />}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path=":id" element={<Coin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
