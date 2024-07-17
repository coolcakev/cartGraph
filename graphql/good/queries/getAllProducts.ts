import prisma from "../../../lib/prisma";

export const getAllProducts = async (_, props) => {
    const products = await prisma.good.findMany();
    return products;
};