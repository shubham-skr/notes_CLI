/**
 * Contains command's handler functions and other utils
 * Styles command output
*/ 

// File handler module
const fs = require('fs');

// Chalk npm module for printing colored texts
const chalk = require('chalk');

// Load all notes from notes.json file
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

// Save changes made to notes.json
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

// add command's handler function - Add a new note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log("\n" + chalk.bgBlack.green.bold("New Note Added"));
  } else {
    console.log("\n" + chalk.bgBlack.red.bold("Note Title Taken"));
  }
};

// remove command's handler function - to remove an existing note
const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log("\n" + chalk.bgBlack.green.bold("Note Removed"));
    saveNotes(notesToKeep);
  } else {
    console.log("\n" + chalk.bgBlack.red.bold("No Note Found"));
  }
};

// read command's handler function - to read a note
const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (note) {
    console.log("\n" + chalk.bgBlack.green.bold("Note Found"));
    console.log("\n\n" + chalk.bgBlue.bold.white(note.title));
    console.log("\n" + chalk.bgBlack.white(note.body));
  } else {
    console.log("\n" + chalk.bgBlack.bold.red("No Note Found"));
  }
};

// list command's handler function - to list all notes
const listNotes = () => {
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log("\n" + chalk.bgBlue.white.bold(note.title));
    console.log("\n" + chalk.bgBlack.white(note.body) + "\n");
  });
};

// Exporting all handler functions
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  readNote: readNote,
  listNotes: listNotes,
};
