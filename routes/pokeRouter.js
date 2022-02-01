const express = require("express");
const jsonData = require("../data/pokedex.json");
const pokeRouter = require("express").Router();
const pokeController = require("../controllers/pokeController");

//get all pokemon
pokeRouter.get("/", pokeController.getAll);

//get one pokemon by id
pokeRouter.get("/:id", pokeController.getSingle);

//get pokemon with id and specific pokemon info
//if user enters name as parameter, display name
//else if parameter is type display type of pokemon
//else display base
pokeRouter.get("/:id/:info", pokeController.getPokeInfo);

module.exports = pokeRouter;
