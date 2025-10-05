import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Footer from "./component/footer";
import Header from "./component/header";
import Serverload from "./component/server";
import Loader from "./component/Loader";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const isFetchDone = useSelector((state) => state.inform);

  return (
    <>
      <Header />
      <Serverload />
      { isFetchDone. currentlyFetching? <Loader/> :   <Outlet />}
      <Footer />
    </>
  );
}

export default App;
