import App from "./App";
import DefaultShop from "./DefaultShop";
import Electronics from "./Electronics";
import ErrorPage from "./ErrorPage";
import ShoppingCart from "./ShoppingCart";

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
                path: 'shoppingcart',
                element: <ShoppingCart/>,
            }
            
        ]
    }
];

export default routes