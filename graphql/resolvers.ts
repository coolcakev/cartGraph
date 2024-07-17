import {cartResolverMutation, cartResolverQuery} from "./cart/cart.resolver";
import {orderResolveMutation, orderResolverQuery} from "./order/order.resolver";
import {productResolverQuery} from "./good/good.resolver";

export const resolvers = {
    Query: {
        ...cartResolverQuery,
        ...orderResolverQuery,
        ...productResolverQuery
    },
    Mutation: {
        ...cartResolverMutation,
        ...orderResolveMutation
    }
};