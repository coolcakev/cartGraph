import {getOrderById} from "./queries/getOrderById";
import {createOrder} from "./mutations/createOrder";

export const orderResolverQuery = {
    getOrderById: getOrderById,
};

export const orderResolveMutation = {
    createOrder: createOrder
};