Cluster.connect(process.env.MONGO_URL);
Cluster.register("interface");

Cluster.allowPublicAccess("agencias");
Cluster.allowPublicAccess("terminais");