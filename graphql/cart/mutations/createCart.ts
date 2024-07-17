import prisma from "../../../lib/prisma";

export const createCart = async (_, props) => {
    const {createCartModel} = props;
    const cart = await prisma.cart.create({
        data: {ownerName: createCartModel.ownerName, goodIds: []}
    });
    return cart;
};