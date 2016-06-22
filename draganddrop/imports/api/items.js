import { Mongo } from 'meteor/mongo';
	
export const Items = new Mongo.Collection('items');


Meteor.methods({
	update: function(itemsToSave) {
		console.log("in method")

		// Make sure the user is logged in before inserting a task
		if (! this.userId) {
		  throw new Meteor.Error('not-authorized');
		}

		Items.update({createdBy: Meteor.userId()},
			{
				$set: 
				{
					layout: itemsToSave
				}
			},	
			{
				upsert: true
			}
		);
	},
});