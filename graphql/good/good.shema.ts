export const goodTypeRefs = `
    type Good{
       id: ID
       name: String
       price: Int
       description: String
    }

    type Query {
        getAllProducts: [Good]
    }
`;