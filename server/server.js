

  Meteor.publish("books", function () {
    return Books.find({});
  });

  Meteor.publish("edizioni", function () {
    return Edizioni.find({});
  });


  Books.allow({
  	insert : function(userID,doc){
  		return true;
  	},
	update : function(UserdID,doc,fields,modifier){
        return true;
    },
  	remove : function(userID,doc){
  		return true;
  	}
  });

  Edizioni.allow({
  	insert : function(userID,doc){
  		return true;
  	},
    update : function(UserdID,doc,fields,modifier){
          return true;
      },
  	remove : function(userID,doc){
  		return true;
  	}
  });