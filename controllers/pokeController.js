const jsonData = require("../data/pokedex.json");

const pokeController = {
  // get all pokemon
  getAll: (req, res) => {
    res.send(jsonData);
  },
  //get one pokemon by id
  getSingle: (req, res) => {
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
  },

  getPokeInfo: (req, res) => {
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
  },
};

module.exports = pokeController;
