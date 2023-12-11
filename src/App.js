import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/Home";
import SelectTemplate from "./components/SelectTemplate";
import Editor from './components/Editor'
import store from "./store/index";
import PersonalInfo from "./components/PersonalInfo";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Summary from "./components/Summary";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/choose-template",
    element: <SelectTemplate />,
  },
  {
    path: '/editor',
    element: <Editor />,
    children: [
      {
        path: '/editor/personal-info',
        element: <PersonalInfo/>
      },
      {
        path: '/editor/work-history',
        element: <WorkHistory/>
      },
      {
        path: '/editor/education',
        element: <Education/>
      },
      {
        path: '/editor/skills',
        element: <Skills/>
      },
      {
        path: '/editor/summary',
        element: <Summary/>
      }
    ]
  }

]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
};

export default App;
