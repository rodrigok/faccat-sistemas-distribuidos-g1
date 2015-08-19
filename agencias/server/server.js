console.log(process.env.MONGO_URL)
Cluster.connect(process.env.MONGO_URL);
Cluster.register("agencias");


agencias = new Meteor.Collection('agencias');


Meteor.methods({
	create: function(name) {
		agencias.insert({
			name: name
		});
		console.log('criando agencia');
	}
});