agenciasConn = Cluster.discoverConnection('agencias');
agencias = new Meteor.Collection('agencias', agenciasConn);

terminaisConn = Cluster.discoverConnection('terminais');
terminais = new Meteor.Collection('terminais', terminaisConn);

Template.hello.helpers({
	agencias: function () {
		return agencias.find();
	},

	terminais: function () {
		return terminais.find();
	}
});