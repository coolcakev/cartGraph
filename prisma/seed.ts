import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const isNotEmpty = await prisma.good.count();
    if (isNotEmpty) {
        return;
    }

    await prisma.good.createMany({
        data: [
            {name: "good1", price: 100, description: "good1 description"},
            {name: "good2", price: 50, description: "good2 description"},
            {name: "good3", price: 70, description: "good3 description"},
            {name: "good4", price: 150, description: "good4 description"},
            {name: "good5", price: 30, description: "good5 description"},
        ]
    })
}


main().catch((e)=> {
    console.log(e);
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
});
