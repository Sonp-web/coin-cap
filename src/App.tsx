import "./App.css";
import { AppProvider } from "./AppProvider";
import { AppRoutes } from "./AppRoutes";
function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
