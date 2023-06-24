import App from "../../App";
import Home from "../../Routes/Home";
import Favs from "../../Routes/Favs";
import Detail from "../../Routes/Detail";
import Contact from "../../Routes/Contact";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/favs",
            element: <Favs />,
        },
        {
            path: "/detail",
            element: <Detail />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
    ],
  },
]);

export default router;