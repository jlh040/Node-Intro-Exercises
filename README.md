### Node Intro Exercises

#### Functionality

- In this exercise I have created three Node files that recreate the basic functionality of the [cat](http://www.linfo.org/cat.html) command.
  - ***step1.js*** allows the user to run a line like: `node step1.js some_file.txt` and then the contents of `some_file.txt` will be displayed to the terminal
  - ***step2.js*** builds on ***step1.js*** and allows the user to pass in a url in the command line, and then the contents of the response are displayed to the terminal
  - ***step3.js*** is the final step and allows a user to both read and write files by passing in the --out flag.
    - e.g: `node step3.js --out new.txt one.txt` (there is no output but the contents of one.txt will be put into new.txt)

#### Technicalities

- To get this code onto your machine, first run: `git clone https://github.com/jlh040/Node-Intro-Exercises.git`
- Then, assuming you have node installed, run: `npm install` to download the dependencies.