const mongoose=require("mongoose");
const { animeObject , completeId}=require("./zodcheck");
const { boolean, ZodBoolean } = require("zod");
mongoose.connect("mongodb+srv://adarsh:Adarsh%4054321@cluster0.o25mqzc.mongodb.net/anime");

const AnimeSchema=new mongoose.Schema({
    animeName : String,
    description: String,
    completion: Boolean
});

const Updatelist=new mongoose.Schema({
    id: String
})

const Anime=mongoose.model("Anime",AnimeSchema);

const update=mongoose.model("Update",Updatelist);

module.exports={Anime,update};