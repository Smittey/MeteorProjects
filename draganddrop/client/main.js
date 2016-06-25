import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Items } from '../imports/api/items.js'

import '../imports/ui/body.js';


var template_names = [];
selected = [];

Template.categories.helpers({
    categories: function(){
		template_names = [];	
		for (var key in Template) {
		  if (Template.hasOwnProperty(key)) {
			// Meteor internal templates begin with _
			if (key.indexOf('item_') > -1) {
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
 
		//addToCanvas(category)

		selected.push(category)
		Meteor.call('update', selected);
    }
});

function addToCanvas(template)
{
	Blaze.renderWithData(Template[template], {my: "data"}, $("#sortable")[0])
}





Template.dragList.onRendered(function(){
	dragula([document.querySelector('.container')], {
	  moves: function (el, container, handle) {
		return handle.className === 'handle';
	  },
	  
	});
      
});

Template.dragList.events({
	'click .remove': function (e) {  
		$(event.target).closest('div').remove()	
	}
});
  
