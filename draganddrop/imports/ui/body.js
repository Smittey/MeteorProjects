import { Template } from 'meteor/templating';
import { Items } from '../api/items.js'
import { Mongo } from 'meteor/mongo';


import './body.html';
//import '../../client/main.js';

Template.dragList.helpers({
    items: function () {
		var capture = Items.find({createdBy: Meteor.userId()});
		console.log(capture);
		
		var layouts = 	capture.fetch(function(doc){
			return doc.layout;
		});
		selected = layouts[0].layout;
		return layouts[0].layout;
      }    
});