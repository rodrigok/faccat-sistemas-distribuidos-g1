var agenciasConn = Cluster.discoverConnection('agencias');
var agencias = new Meteor.Collection('agencias', agenciasConn);

var terminaisConn = Cluster.discoverConnection('terminais');
var terminais = new Meteor.Collection('terminais', terminaisConn);

Template.hello.helpers({
	agencias: function () {
		return agencias.find();
	},

	terminais: function () {
		return terminais.find();
	}
});