'use strict';

var fs = require('fs');

module.exports = {
  app: function () {
    // Create page dir
    fs.mkdirSync('app');
    fs.mkdirSync('app/mods');
    fs.mkdirSync('app/pages');

    // mods
    this.fs.copy(
      this.templatePath('mods/base.less'),
      this.destinationPath('app/mods/base.less')
    );
    this.fs.copy(
      this.templatePath('mods/common.less'),
      this.destinationPath('app/mods/common.less')
    );
    this.fs.copy(
      this.templatePath('mods/mixins.less'),
      this.destinationPath('app/mods/mixins.less')
    );
    this.fs.copy(
      this.templatePath('mods/reset.less'),
      this.destinationPath('app/mods/reset.less')
    );
    this.fs.copy(
      this.templatePath('mods/variables.less'),
      this.destinationPath('app/mods/variables.less')
    );
    this.fs.copy(
      this.templatePath('mods/util.js'),
      this.destinationPath('app/mods/util.js')
    );

    // pages.ejs
    this.fs.copy(
      this.templatePath('pages.ejs'),
      this.destinationPath('pages.ejs')
    );

    // webpack
    this.fs.copy(
      this.templatePath('make-webpack.config.js'),
      this.destinationPath('make-webpack.config.js')
    );
    this.fs.copy(
      this.templatePath('webpack-dev.config.js'),
      this.destinationPath('webpack-dev.config.js')
    );
    this.fs.copy(
      this.templatePath('webpack-production.config.js'),
      this.destinationPath('webpack-production.config.js')
    );

    // Dependenices
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        appName: this.props.appName,
        description: this.props.description,
        author: this.props.author
      }
    );
    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'),
      { appName: this.props.appName }
    );
    this.fs.copy(
      this.templatePath('bowerrc'),
      this.destinationPath('.bowerrc')
    );
  },

  projectfiles: function () {
    this.fs.copy(
      this.templatePath('editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('jshintrc'),
      this.destinationPath('.jshintrc')
    );
    this.fs.copy(
      this.templatePath('gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        appName: this.props.appName,
        description: this.props.description
      }
    );
  }
};
