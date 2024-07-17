import prisma from "../../../lib/prisma";
import {Cart, OrderGoodItem} from "@prisma/client";

export const createOrder = async (_, props) => {
    const {createOrderModel} = props;
    const cart = await prisma.cart.findFirst({where: {id: createOrderModel.cartId}}) as Cart;

    if (!cart) {
        throw new Error(`Cart with id ${createOrderModel.cartId} not found`);
    }

    if (cart.goodIds.length === 0) {
        throw new Error(`Cart with id ${createOrderModel.cartId} is empty`);
    }

    const cartGoodIds=cart.goodIds.map((x) => x.id)
    const products = await prisma.good.findMany({
        where: {
            id: {
                in: cartGoodIds
            }
        }
    });

    const orderProduct = products.map((product): OrderGoodItem => ({
        name: product.name,
        quantity: cart.goodIds.find((x) => x.id === product.id)?.quantity || 0,
        price: product.price
    }))

    const totalPrice = orderProduct.reduce((sum, good) => sum + good.price * good.quantity, 0);

    const order = await prisma.order.create({
        data: {
            name: createOrderModel.name,
            surname: createOrderModel.surname,
            address: createOrderModel.address,
            totalPrice,
            goods:orderProduct
        }
    });

    await prisma.cart.update({where: {id: createOrderModel.cartId}, data: {goodIds: []}});

    return order;
};