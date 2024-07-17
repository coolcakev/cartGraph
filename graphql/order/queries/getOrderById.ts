import prisma from "../../../lib/prisma";

export const getOrderById = async (_, props) => {
    const {id} = props;
    const order = await prisma.order.findFirst({where: {id}});
    return order;
};