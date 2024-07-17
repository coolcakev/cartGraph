import {gql} from "graphql-tag";
import {cartTypeRefs} from "./cart/cart.schema";
import {orderTypeRefs} from "./order/order.schema";
import {goodTypeRefs} from "./good/good.shema";

export const typeDefs = gql`
    ${cartTypeRefs}
    ${orderTypeRefs}
    ${goodTypeRefs}
`;