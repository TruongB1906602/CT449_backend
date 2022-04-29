const config = {
	app: {
		port: process.env.PORT || 3000,
	},
	db: {
		uri: process.env.MONGODB_URI || "mongodb+srv://Ngoctruong29:712001@cluster0.bragn.mongodb.net/Truong?retryWrites=true&w=majority",
	},
	jwt: {
		secret: process.env.JWT_SECRET || "contactbook-secret-key",
	},
};

module.exports = config;
