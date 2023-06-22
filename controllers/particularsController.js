import particularsModel from "../models/particularsModel.js";

export const registerController = async (req, res) => {
  try {
    const { title, email, phone, template } = req.body;
    // validations
    if (!title) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is Required" });
    }
    if (!template) {
      return res.send({ error: "Template is Required" });
    }

    const newParticular = new particularsModel({
      title,
      email,
      phone,
      template,
    }).save();

    res.status(201).send({
      sucess: true,
      message: "New Conference Registered Successfully...",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      sucess: false,
      message: "Error in registration",
      error,
    });
  }
};
