import posts from "./tuits.js"

let tuits = posts

const createTuit = (req, res) => {
    const newTuit = req.body
    newTuit._id = (new Date()).getTime() + ""
    newTuit.likes = 0
    newTuit.liked = false
    newTuit.image = "nasa.png"
    newTuit.userName = "NASA"
    newTuit.handle = "@nasa"
    newTuit.replies = 0
    newTuit.retuits = 0
    newTuit.time = "1 min"

    tuits.push(newTuit)
    res.json(newTuit)

}

const findTuits = (req, res) => {
    res.json(tuits)

}

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid
    const updates = req.body
    const tuitIndex = tuits.findIndex(t => t._id === tuitIdToUpdate)
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates}
    res.sendStatus(200)

}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params.tid
    tuits = tuits.filter(t => t._id !== tuitIdToDelete)
    res.sendStatus(200)

}

export default (app) => {
    app.post('/api/tuits', createTuit)
    app.get('/api/tuits', findTuits)
    app.put('/api/tuits/:tid', updateTuit)
    app.delete('/api/tuits/:tid', deleteTuit)
}