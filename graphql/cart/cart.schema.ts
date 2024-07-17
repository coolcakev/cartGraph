export const cartTypeRefs = `
    type CartGoodItem {
        id: ID
        quantity: Int
    }
    
    type Cart{
       id: ID
       ownerName: String
       goodIds: [CartGoodItem]
       createdAt: String
    }
    
    input CreateCartModel{
       ownerName: String
    } 
    
    input ActionToCartModel{
        cartId: ID
        goodId: ID
    }
    
    type Mutation{
        createCart(createCartModel: CreateCartModel!): Cart
        addGoodToCart(addGoodToCartModel: ActionToCartModel!): Cart
        removeGoodFromCart(removeGoodFromCartModel: ActionToCartModel!): Cart
    }
    
     type Query {
        getCartById(id: String!): Cart
        getAllCarts: [Cart]
    }
`;