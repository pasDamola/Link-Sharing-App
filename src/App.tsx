import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Preview from "./pages/Preview";
import Profile from "./pages/Profile";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route>
        <Route path="preview" element={<Preview />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
