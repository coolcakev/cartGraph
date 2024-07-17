import prisma from "../../../lib/prisma";

export const getCartById = async (_, props) => {
    const {id} = props;
    const cart = await prisma.cart.findFirst({where: {id}});
    return cart;
};