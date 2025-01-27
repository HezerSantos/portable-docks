import App from "./App";
import DefaultShop from "./DefaultShop";
import Electronics from "./Electronics";
import ErrorPage from "./ErrorPage";
import Jewelery from "./Jewelery";
import LoadingScreen from "./Loading";
import MenC from "./MensClothing";

import ShoppingCart from "./ShoppingCart";
import WomenC from "./WomensClothing";

const routes = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <DefaultShop/>
            },
            {
                path: 'electronics',
                element: <Electronics/>
            },
            {
                path:"jewelery",
                element: <Jewelery/>
            },
            {
                path: "mensclothing",
                element: <MenC/>
            },
            {
                path:"womensclothing",
                element: <WomenC/>
            },
            {
                path: 'shoppingcart',
                element: <ShoppingCart/>,
            }         
        ]
    }
];

export default routes