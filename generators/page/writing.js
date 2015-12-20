'use strict';

module.exports = {
  app: function () {
    var pageName = this.props.pageName;
    console.log(pageName);

    // Create dir
    this.mkdir('app/pages/' + pageName);

    // Html files
    this.fs.copy(
      this.templatePath('index.html'),
      this.destinationPath('app/pages/' + pageName + '.html')
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('app/pages/' + pageName + '.html'),
      {
        pageName: this.props.pageName
      }
    );

    // template
    this.fs.copy(
      this.templatePath('index.ejs'),
      this.destinationPath('app/pages/' + pageName + '/index.ejs')
    );

    // Static assets
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('app/pages/' + pageName + '/index.js')
    );
    this.fs.copy(
      this.templatePath('index.less'),
      this.destinationPath('app/pages/' + pageName + '/index.less')
    );
  },

  projectfiles: function () {
  }
};
