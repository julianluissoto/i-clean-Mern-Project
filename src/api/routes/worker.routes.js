const express = require("express");

const router = express.Router();

const Worker = require("../models/worker");

//get all workers

router.get("/", async (req, res) => {
  try {
    const dataBaseResponse = await Worker.find();

    res.json(dataBaseResponse);
  } catch (error) {
    console.log(error);
    res.json({ msg: "error", error });
  }
});

//get one worker by id

router.get("/review/:id", async (req, res) => {
  const { id } = req.params;
  const formatedId = id.substring(1);

  try {
    const dataBaseResponse = await Worker.findById(formatedId);
    const dataReview = dataBaseResponse.clientReview;
    res.json(dataReview);
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const dataBaseResponse = await Worker.findById(id);
  console.log(dataBaseResponse);
  res.json(dataBaseResponse);
});

//create worker
router.post("/", async (req, res) => {
  const {
    name,
    lastName,
    address,
    qualification,
    image,
    skills,
    clientReview,
  } = req.body;
  const workerCreated = new Worker({
    name,
    lastName,
    address,
    qualification,
    image,
    skills,
    clientReview,
  });
  const workerSaved = await Worker.create(workerCreated);
  res.json({ dataReceived: workerSaved });
});

//edit worker data

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const {
    name,
    lastName,
    address,
    qualification,
    image,
    skills,
    clientReview,
  } = req.body;
  const workerUpdated = {
    name,
    lastName,
    address,
    qualification,
    image,
    skills,
    clientReview,
  };

  await Worker.findByIdAndUpdate(id, workerUpdated);

  res.send(`worker ${name} ${lastName} updated succefull`);
});

router.put("/review/:id", async (req, res) => {
  const { id } = req.params;
  const { clientReview } = req.body;
  const workerUpdated = { clientReview };

  await Worker.findByIdAndUpdate(id, workerUpdated);

  res.send(`worker ${id} review updated`);
});

// delete worker

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Worker.findByIdAndDelete(id);
  res.send(`worker with the id ${id} removed succefully`);
});

module.exports = router;
