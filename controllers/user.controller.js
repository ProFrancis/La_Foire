const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const ENV = require("../config/env");

// Ajouter un nouvel utilisateur
const register = async (req, res) => {
  try {
    // Hashage du mot de passe avec bcrypt.
    // "10" est le nombre de tours de salage
    const passwordHashed = await bcrypt.hash(req.body.password, 10);

    const response = await UserModel.create({
      ...req.body,
      password: passwordHashed,
    });

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    // Recherche l'utilisateur dans la base de données par son email
    const user = await UserModel.findOne({ email: req.body.email });
    // Si l'utilisateur n'est pas trouvé, renvoie une erreur 404.
    if (!user) return res.status(404).json("User not found ! ");

    // Compare le mot de passe fourni dans la requete
    // avec le mot de passe de l'utilisateur qui est dans la bdd
    const comparePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    // Si le mot de passe est incorrect, renvoie une erreur 400
    if (!comparePassword) return res.status(400).json("Wrong Credentials !");

    // Crée un jeton JWT
    const token = jwt.sign({ id: user._id }, ENV.TOKEN, { expiresIn: "24h"})

    // Supprime le mot de passe de l'utilisateur 
		// pour des raisons de sécurité.
		// Ce code utilise la destructuration pour extraire 
		// la propriété password de user._doc. 
		// Toutes les autres propriétés sont regroupées 
		// dans un nouvel objet appelé others. 
		// C’est une pratique courante lorsque 
		// vous voulez exclure certaines propriétés d’un objet. 

    const { password, ...others } = user._doc

    res.cookie('access_token', token, { httpOnly: true })
    .status(200)
    .json(others);
  } catch (error) {
    res.status(500).json(error.message)
  }
};

module.exports = {
  register,
  login,
};
