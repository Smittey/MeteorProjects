import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import '../imports/ui/body.js';


Template.categories.helpers({
    categories: function(){
		
		var template_names = [];
		for (var key in Template) {
		  if (Template.hasOwnProperty(key)) {
			// Meteor internal templates begin with _
			if (key.indexOf('graph_') > -1) {
			  template_names.push(key);
			  console.log(key);
			}
		  }
}
        return template_names
    }
});

Template.categories.events({
    "change #category-select": function (event, template) {
        var category = $(event.currentTarget).val();
        console.log("category : " + category);
        // additional code to do what you want with the category
    }
});





Template.graph_dragList.onRendered(function(){
	dragula([document.querySelector('.container')], {
	  moves: function (el, container, handle) {
		return handle.className === 'handle';
	  },
	  
	});
      
});

Template.graph_dragList.events({
	'click .remove': function (e) {  
		$(event.target).closest('div').remove()	
	}
});
  
	  
Template.graph_dragList.helpers({
  items: [
    { text: 'This is item 1' },
    { text: 'This is item 2' },
    { text: 'This is item 3' },
  ],
});

