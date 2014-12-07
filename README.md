#My Blog
by Jacob Payne

* Uses Gulp for Static Compiling
* Converts Markdown to JSON -> Passes it to Angular
* Angular for the extra tidbits + Sass

##How To Develop

Just install node dependencies, run gulp and
you're ready to go.

```
$ cd blog
$ npm install && gulp

// Get Served on Localhost:9000
	
```
##How to write a Blog Post:

Start the same thing as above, just write your markdown post in the `/blog/posts` folder. Don't forget to write info:

    ---
    slug: filename 
    title: Title of Post (duh)
    date: XX, X, 20XX
    ---
    Rest of Post Stuff here...