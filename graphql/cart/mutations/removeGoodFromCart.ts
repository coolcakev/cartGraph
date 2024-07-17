import {baseActionCart} from "./addGootToCart";

export const removeGoodFromCart = async (_, props) => {
    const {removeGoodFromCartModel} = props;
    const updatedCart = await baseActionCart(removeGoodFromCartModel, removeGoodFromCartBody);
    return updatedCart;
};

const removeGoodFromCartBody = (goodIndex: number, goodIds: any, goodId: string) => {
    if (goodIndex === -1) {
        throw new Error(`Good not found`);
    }

    goodIds[goodIndex].quantity > 1
        ? goodIds[goodIndex].quantity -= 1
        : goodIds.splice(goodIndex, 1);

    return goodIds;
};