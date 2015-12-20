'use strict';

var yosay = require('yosay');
var path = require('path');
var chalk = require('chalk');

module.exports = function() {
  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the bee\'s knees ' + chalk.red('Ants') + ' generator!'
  ));

  var prompts = [];

  prompts.push({
    type: 'input',
    name: 'appName',
    message: 'What\'s the name of your project?',
    default: process.cwd().split(path.sep).pop()
  });

  prompts.push({
    type: 'input',
    name: 'description',
    message: 'enter the description of your project:',
    default: 'null'
  });

  prompts.push({
    type: 'input',
    name: 'author',
    message: 'enter your name:',
    default: 'null'
  });

  this.prompt(prompts, function (props) {
    this.props = props;
    console.log(props.appName);
    done();
  }.bind(this));
};
