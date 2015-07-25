



Template.booklist.events({
	'click .remove': function(){
    Books.remove(this._id);
    console.log("book removed");
}
})

Template.booklist.events({
    'click .view': function(){
        Router.go('/book/:_id');
        console.log("go book");
        paramID= this._id;
        param1= this.title;
        param2= this.author;
        param3= this.genere;
      param4= this.edizione;
        console.log(paramID,param1,param2,param3,param4);
    }
})

Template.book.helpers({

        title2: "test",
        paramID:function(){
          return paramID
        },
        param1: function(){
            return param1
        },
        param2: function() {
            return param2
        },
        param3: function() {
            return param3
        },
       param4: function(){
           return param4
       }

    })
Template.book.events({

    'submit form': function(event){
        event.preventDefault();
        var newTitle= title.value;
        var newAuthor= author.value;
        var newGenere= genere.value;
        var newEdizione= edizione.value;
        Books.update(paramID,{$set:{title:newTitle,author:newAuthor,genere:newGenere,edizione:newEdizione}});
        console.log(paramID);
        console.log(newTitle,newAuthor,newGenere,newEdizione);
        console.log("Book updated");
        title.value= "";
        author.value= "";
        genere.value= "";
        edizione.value= "";
    }
})