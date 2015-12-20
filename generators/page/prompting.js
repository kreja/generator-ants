'use strict';

var yosay = require('yosay');
var chalk = require('chalk');
var fs = require('fs');

module.exports = function() {
  var done = this.async();

  // Have Yeoman greet the user.
  this.log(yosay(
    'Welcome to the bee\'s knees ' + chalk.red('Ants') + ' generator!'
  ));

  var prompts = [];

  if (!this.pageName) {
    prompts.push({
      type: 'input',
      name: 'pageName',
      message: 'What\'s the name of your page?',
      default: 'index',
      validate: function(input) {
        if (!input) {
          return '不能为空哦，会让人家很为难的~';
        }
        if (fs.existsSync(this.destinationPath('app/pages/' + input))) {
          return '页面已经存在当前目录中了，换个名字吧~';
        }
        return true;
      }.bind(this)
    });
  }

  if (fs.existsSync(this.destinationPath('app/pages/' + this.pageName))) {
    prompts.push({
      type: 'input',
      name: 'pageName',
      message: '页面已经存在当前目录中了，换个名字吧~',
      store: false,
      validate: function(input) {
        if (!input) {
          return '不能为空哦，会让人家很为难的~';
        }
        if (fs.existsSync(this.destinationPath('app/pages/' + input))) {
          return '页面已经存在当前目录中了，换个名字吧~';
        }
        return true;
      }.bind(this)
    });
  }


  this.prompt(prompts, function (props) {
    this.props = props;
    // To access props later use this.props.someOption;
    done();
  }.bind(this));
};
