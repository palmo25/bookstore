

Template.edizionilist.helpers({
	 edizioni: function(){
  return Edizioni.find();
  }
})

Template.edizionilist.events({
	'click .remove': function(){
    Edizioni.remove(this._id);
    console.log("Edizioni removed");
}
})