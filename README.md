![intro](https://user-images.githubusercontent.com/114018277/213886795-204b62e1-a7cf-42c3-92d1-f007f8b6f161.png)
# Markdown Links

***

## 1. INTRO

[Markdown](https://es.wikipedia.org/wiki/Markdown) is a lightweight markup language that is very popular among developers. It is used in many platforms that handle plain text (such as GitHub, forums, blogs, etc.), and it is very common to find several files in this format in any type of repository (starting with the traditional README.md).

These Markdown files usually contain links that are often broken or no longer valid, which greatly impairs the value of the information that is intended to be shared.

We were challenged to create a tool (using NODE.JS) that could identify and read .md files to extract the links contained in them, while also being able to validate them and obtain some statistics such as: broken links, number of unique links, total number of links in the file, etc.

**MD-LINKS** not only can read files, but also if desired, you can pass it the path to a folder and it will locate any .md files that exist within it and read them to extract the links.

**Below you can find the flowchart of how md-Links works:**
![diagrama-flujo-01](https://user-images.githubusercontent.com/114018277/214339176-4ddaced7-242d-407c-90ea-5115efb0e1fd.png)


## 2. HOW TO INSTALL IT?

In your terminal type:  ***`npm install karlaCRM/md-links-KarlaCRM`*** and press ENTER. 

## 3. HOW TO USE IT?

Once it is installed:

* 1. In your terminal, type: ***`md-Links`***
A list of available commands will appear.

* 2. md-Links is designed to search for links in MARKDOWN files **by specifying the path to a specific file or directory**.

* 3. In your terminal, type: ***`md-Links pathOfTheFile/file.md`***, for example, if you had a file called "readme.md" in a folder called "tests", the command would be **md-Links tests/readme.md**. Press enter and the list of links will appear. :)

* 4. If you want to validate each link and see its status, type the **--validate** command: ***`md-Links pathOfTheFile/file.md --validate`***
* 
* 5. If you want to know how many links there are in the specified path and how many are unique, type the **--stats** command: ***`md-Links pathOfTheFile/file.md --stats`***
* 
* 6. If you want to validate the links to see their status, and get the total number of links, how many are unique, and how many are broken, type the **--stats** command:  ***`md-Links pathOfTheFile/file.md --validate --stats`***
* 
* 7. If you have any doubts and need to review the commands, type: **--help**:  ***`md-Links --help`***





