import { useSelector } from "react-redux";
import AppRoutes from "./components/Routes/app-routes";
import Header from "./components/Header/Header";

const App = () => {
  const isDarkMode = useSelector((store) => store.theme.isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header />
      <div className="dark:bg-[#1D1F25] dark:text-white">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
