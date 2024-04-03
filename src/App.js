import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import RealLandingPage from "./components/RealLandingPage";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { MainDashboard } from "./components/Dashboard/MainDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RealLandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: routes.dashboard,
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <MainDashboard />,
      },
    ],
  },
]);
function App() {
  return (
    // <>
    //   {/* <LoginPage />
    //   <LandingPageHeader />
    //   <BlueSection />
    //   <h1>The Power of Premium</h1>
    //   <div className="herosection">
    //     <SubSectionWhite
    //       img={cards[0].img}
    //       h3={cards[0].h3}
    //       p={cards[0].p}
    //       className="subsectionwhite"
    //     />
    //     <SubSectionWhite img={cards[1].img} h3={cards[1].h3} p={cards[1].p} />
    //     <SubSectionWhite img={cards[2].img} h3={cards[2].h3} p={cards[2].p} />
    //     <SubSectionWhite img={cards[3].img} h3={cards[3].h3} p={cards[3].p} />
    //   </div>
    //   <PricePlanSection />
    //   <Footer /> */}

    // </>
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
