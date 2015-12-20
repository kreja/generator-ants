# <%= appName %>
<%= description %>

### Features
* webpack(support amd/CommonJS)
* ejs
* less (css extracted from js)
* uglify when build
* auto refresh(but not hot module replacement, it's a problem to be solved..)
* bundle third-party packages into vendor.js and vendor.css, so you needn't require them in your file. Third-party packages included:
    * jquery



### Usage

development:

```bash
npm run dev
```

it will automatically open [http://localhost:8080](http://localhost:8080), and the pages are listed as links.

build:

```bash
npm run build
```
