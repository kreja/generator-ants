# generator-ants

  [![NPM version][npm-image]][npm-url]
  [![build status][travis-image]][travis-url]

> [Yeoman](http://yeoman.io) generator for web app 

### Features
* webpack(support amd/CommonJS)
* ejs
* less (css extracted from js)
* uglify when build
* auto refresh(but not hot module replacement, it's a problem to be solved..)
* bundle third-party packages into vendor.js and vendor.css, so you needn't require them in your file. Third-party packages included:
    * jquery


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```




### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-ants from npm, run:

```bash
npm install -g generator-ants
```



## Usage
Make a new directory, and `cd` into it:

```bash
mkdir my-new-project && cd $_
```

Initiate the generator:

```bash
yo ants
```

Run `npm run dev` for preview.




## Generators
* `yo ants`: generates a new web app.
* `yo ants:page`: generates a page, including a html, an ejs, a script and a stylesheet.


[npm-image]: https://img.shields.io/npm/v/generator-ants.svg?style=flat-square
[npm-url]: https://npmjs.org/package/generator-ants
[travis-image]: https://img.shields.io/travis/kreja/generator-ants.svg
[travis-url]: https://travis-ci.org/kreja/generator-ants


