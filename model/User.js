const Sequelize = require('sequelize');
const sequelize = require("../config");

const User = sequelize.define('user', {
	id: {
		type: Sequelize.STRING(50),
		primaryKey: true
	},
	username: Sequelize.STRING(50),
	sex: Sequelize.BIGINT,
	address: Sequelize.STRING(100),
	birth: Sequelize.STRING(10),
	createAt: Sequelize.BIGINT,
	updateAt: Sequelize.BIGINT
}, {timestamps: false});

User.sync();

module.exports = User;