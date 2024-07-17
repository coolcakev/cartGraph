import prisma from "../../../lib/prisma";

export const getAllCarts = async (_, props) => {
    const carts = await prisma.cart.findMany();
    return carts;
};