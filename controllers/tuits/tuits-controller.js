// import posts from "./tuits.js"
//
// let tuits = posts

import * as tuitsDao from "../tuits/tuits-dao.js"

//

const createTuit = async (req, res) => {
    const newTuit = req.body
    newTuit.likes = 0
    newTuit.liked = false
    const insertedTuit = await tuitsDao.createTuit(newTuit)
    res.json(insertedTuit)
}

// const findTuits = (req, res) => {
//     res.json(tuits)
//
// }

const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits)

}

// const updateTuit = (req, res) => {
//     const tuitIdToUpdate = req.params.tid
//     const updates = req.body
//     const tuitIndex = tuits.findIndex(t => t._id === tuitIdToUpdate)
//     tuits[tuitIndex] = {...tuits[tuitIndex], ...updates}
//     res.sendStatus(200)
//
// }

const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid
    const updates = req.body
    const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates)
    res.json(status)
}

// const deleteTuit = (req, res) => {
//     const tuitIdToDelete = req.params.tid
//     tuits = tuits.filter(t => t._id !== tuitIdToDelete)
//     res.sendStatus(200)
//
// }

const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitIdToDelete)
    res.json(status)
}

export default (app) => {
    app.post('/api/tuits', createTuit)
    app.get('/api/tuits', findTuits)
    app.put('/api/tuits/:tid', updateTuit)
    app.delete('/api/tuits/:tid', deleteTuit)
}