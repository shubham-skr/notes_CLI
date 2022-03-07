# notes_CLI
##### node.js project
<br/>

notes_CLI is a command line application for managing notes :
1. Adding a note
2. Reading a note
3. Listing all notes
4. Removing a note

The required command to perform these operations are provided through command line arguments. It uses yargs npm module to parse command line arguments and chalk npm module to display styled texts.

<br/>

## Tutorial
1. Add a note : node app.js add --title="[text]" --body="[text]"

<img src="./readme_images/add_note.png"/> 
<br/>

2. List all notes : node app.js list

<img src="./readme_images/list_notes.png"> 
<br/>

3. Read a note : node app.js read --title="[text]"

<img src="./readme_images/read_note.png">
<br/>

4. Remove a note : node app.js remove --title="[text]"

<img src="./readme_images/remove_note.png"/>
<br/>

5. Display help about all commands : node app.js --help

<img src="./readme_images/help.png"/>




