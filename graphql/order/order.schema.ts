export const orderTypeRefs = `
    type Order{
       id: ID
       name: String
       surname: String
       address: String
       goods: [OrderGoodItem]
       totalPrice: Int
       createdAt: String
    }
    
    type OrderGoodItem{
        name:    String
        quantity: Int
        price:    Int
    }
    
    input CreateOrderModel{
        name: String
        surname: String
        address: String
        cartId: ID
    }
    
    type Query {
        getOrderById(id: String!): Order
    }
    
    type Mutation {
        createOrder(createOrderModel: CreateOrderModel!): Order
    }
    
`;
