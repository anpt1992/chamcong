module.exports = function (sequelize, Sequelize) {

    var Company = sequelize.define('company', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        url: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    });

    return Company;

}