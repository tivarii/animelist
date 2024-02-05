const zod=require("zod");

const animeObject=zod.object({
    animeName: zod.string().min(1),
    description: zod.string().min(1),
    completion: zod.boolean()
})

const completeId=zod.object({
    id:zod.string().min(1),
})

module.exports={
    animeObject,
    completeId
}