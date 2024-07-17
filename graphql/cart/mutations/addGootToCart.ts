import prisma from "../../../lib/prisma";
import {Cart} from "@prisma/client";

export const baseActionCart = async (model, func: (goodIndex: number, goodIds: any, goodId: string) => any) => {
    const cart = await prisma.cart.findFirst({
        where: {id: model.cartId},
        include: {goodIds: true}
    }) as Cart;

    if (!cart) {
        throw new Error(`Cart with id ${model.cartId} not found`);
    }

    const goodIndex = cart.goodIds.findIndex((x) => x.id === model.goodId);
    const goodIds = func(goodIndex, cart.goodIds, model.goodId);

    const updatedCart = await prisma.cart.update({
        where: {id: model.cartId},
        data: {goodIds: goodIds}
    });
    return updatedCart;
};

export const addGoodToCart = async (_, props) => {
    const {addGoodToCartModel} = props;
    const updatedCart = await baseActionCart(addGoodToCartModel, addGoodToCartBody);
    return updatedCart;
};

const addGoodToCartBody = (goodIndex: number, goodIds: any, goodId: string) => {
    if (goodIndex >= 0) {
        goodIds[goodIndex].quantity += 1;
    } else {
        goodIds.push({id: goodId, quantity: 1});
    }
    return goodIds;
};