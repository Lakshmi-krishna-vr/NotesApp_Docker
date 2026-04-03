const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://mongo:27017/notesdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const Note = mongoose.model("Note", {
  text: String
});

app.get("/", (req, res) => {
  res.send("API is running");
});

app.post("/notes", async (req, res) => {
  const note = new Note({ text: req.body.text });
  await note.save();
  res.send(note);
});

app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.send(notes);
});

app.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(5000, () => console.log("Server running on port 5000"));