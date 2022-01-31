const express = require("express");
const jsonData = require("../data/pokedex.json");
const pokeRouter = require("express").Router();
// const userController = require("../controllers/userController");
// const userMiddleware = require("../middlewares/userMiddleware");

// get all pokemon
pokeRouter.get("/", (req, res) => {
  res.send(jsonData);
});

//get one pokemon by id
pokeRouter.get("/:id", (req, res) => {
  const { id, info } = req.params;
  //   if (id !== undefined) {
  const pokemon = jsonData.find(
    (pokemon) => pokemon.id === parseInt(req.params.id)
  );
  if (pokemon === undefined) {
    res.status(404).send(`Pokemon with id ${id} does not exist`);
  } else {
    res.send(pokemon);
  }
});

//get pokemon with id and specific pokemon info
//if user enters name as parameter, display name
//else if parameter is type display type of pokemon
//else display base
pokeRouter.get("/:id/:info", (req, res) => {
  const { id, info } = req.params;
  if (id !== undefined) {
    const filteredPokemon = jsonData.find(
      (pokemon) => pokemon.id === parseInt(id)
    );

    if (filteredPokemon === undefined) {
      res.status(404).send(`Pokemon with id ${id} does not exist`);
    } else {
      if (info === "name") {
        res.send(filteredPokemon.name);
      } else if (info === "type") {
        res.send(filteredPokemon.type);
      } else if (info === "base") {
        res.send(filteredPokemon.base);
      } else {
        res.send("Please insert either name, type or base");
      }
    }
  }
});
module.exports = pokeRouter;
