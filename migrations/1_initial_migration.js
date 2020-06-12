const Migrations = artifacts.require('Lemonade');

module.exports = function (deployer) {
   deployer.deploy(Migrations);
};
