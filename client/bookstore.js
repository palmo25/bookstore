
Meteor.subscribe("books");
Meteor.subscribe("edizioni");
Template.booklist.helpers({
  
  books: function(){
    return Books.find({});
  }
})

Template.bookform.helpers({
  edizioni: function(){
  return Edizioni.find();
  }
})
Template.bookform.events({
  "submit form" : function (event){

    event.preventDefault();
    var bookTitle = event.target.title.value;
    var bookAuthor = event.target.author.value;
    var bookGenere = event.target.genere.value;
    var bookEdizioni = event.target.edizioni.value;
     Books.insert({
        title: bookTitle,
        author: bookAuthor,
        genere : bookGenere,
        edizione : bookEdizioni
    });
      console.log("Form submitted");
      title.value= "";
      author.value= "";
      genere.value= "";
      edizione.value= "";
  }

     
})

Template.insertEdizione.events({
  "submit form" : function (event){

    event.preventDefault();
    var casaEditrice = event.target.edizione.value;
    Edizioni.insert({
      nome: casaEditrice,
      
    });
    edizione.value = "";
    console.log("Form submitted");
     
  }
})
  
