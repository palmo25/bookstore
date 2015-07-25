


Router.route('/', function () {
  this.render('bookform');
});
Router.route('/books', function () {
  this.render('booklist');
});
Router.route('/book/:_id', function () {
  this.render('book', {
    data: function () {
      return Books.findOne({_id: this.params._id});
    }
  });
});
Router.route('/edizione', function () {
  this.render('insertEdizione');
});
Router.route('/edizioni', function () {
  this.render('edizionilist');
});
//Router.route('/booklist');
/*Router.route('/post/:_id', function () {
  this.render('Post', {
    data: function () {
      return Posts.findOne({_id: this.params._id});
    }
  });
});*/