import {getCartById} from "./queries/getCartById";
import {createCart} from "./mutations/createCart";
import {addGoodToCart} from "./mutations/addGootToCart";
import {removeGoodFromCart} from "./mutations/removeGoodFromCart";
import {getAllCarts} from "./queries/getAllCarts";

export const cartResolverQuery = {
    getCartById: getCartById,
    getAllCarts: getAllCarts
};

export const cartResolverMutation = {
    createCart: createCart,
    addGoodToCart: addGoodToCart,
    removeGoodFromCart: removeGoodFromCart
};