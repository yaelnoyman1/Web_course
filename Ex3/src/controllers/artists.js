const express = require("express")
const router = express.Router()

const {
    getAllArtistsWhoStartingWithSpecificChar,
} = require('../handlers/artists');

router.post('/getAllArtists', getAllArtistsWhoStartingWithSpecificChar)

module.exports = router;