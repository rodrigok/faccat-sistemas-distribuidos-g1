Cluster.connect(process.env.MONGO_URL);
Cluster.register("terminais");


terminais = new Meteor.Collection('terminais');


Meteor.methods({
	create: function(name) {
		terminais.insert({
			name: name
		});
		console.log('terminais ok')
	}
});
