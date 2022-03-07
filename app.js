/**
 * Main JS file
 * Contains CLI commands
*/

// Yargs npm module for argument parsing
const yargs = require('yargs');

// Stores yargs CLI commands handler function
const notes = require('./notes.js');

// Create add command - Add a note
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title, body }) {
    notes.addNote(title, body);
  }
});

// Create remove command - Remove a note 
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title }) {
    notes.removeNote(title);
  }
});

// Create read command - Print a node
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title }) {
    notes.readNote(title);
  }
});

// Create list command - Lists all notes
yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler() {
    notes.listNotes();
  }
});

// Parsing Arguments
yargs.parse()
