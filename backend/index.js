const express = require("express");
const { Anime, update } = require("./db");
const app = express();
const { animeObject, completeId } = require("./zodcheck");
const cors = require("cors");
app.use(cors());
app.listen(3000, () => { console.log("Server started") });
app.use(express.json());


app.get("/", (req, res) => { res.send("<h1>Homepage</h1>") });



app.get("/animelist", async (req, res) => {
    try {
        const list = await Anime.find({});
        res.json({
            list:list
        });
    }
    catch (e) {
        res.status(411).json({
            error: e.error(),
            msg: "some internal error"
        })
    }
})



//body must have 1.name 2. discription 3. Complete
app.post("/animelist/add", async (req, res) => {
    const listCheck = req.body;
    console.log(listCheck);
    const response = animeObject.safeParse(listCheck);
    if (!response.success) {
        try {
            await Anime.create({
                animeName: listCheck.name,
                description: listCheck.description,
                completion: listCheck.completion
            })
            res.json({
                msg: "anime added successfully"
            })
        }
        catch (e) {
            res.status(411).msg("Some internal error")
        }
    } else {
        res.status(411).json({
            msg: "invalid input"
        })
    }
})



app.post("/animelist/update", async (req, res) => {
    const body = req.body;
    const response = completeId.safeParse(body);
    if (response.success) {
        try {
            await Anime.updateOne({
                _id: body.id
            }, {
                completion: true
            });
            res.json({
                msg: "Anime added successfully"
            })
        } catch (e) {
            res.status(411).msg("Some internal error")
        }

    } else {
        res.status(411).json({
            msg: "invalid input"
        })
    }

})