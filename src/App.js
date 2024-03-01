import "./App.css";
import { HashRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <HashRouter basename="/">
        <Header />
        <AllRoutes />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
