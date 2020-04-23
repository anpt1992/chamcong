module.exports = function (sequelize, Sequelize) {

    var History = sequelize.define('history', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        user_id: {
            type: Sequelize.INTEGER,
            notEmpty: true
        },
        time: {
            type: Sequelize.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            notEmpty: true
        },
        status: {
            type: Sequelize.ENUM('checkin', 'checkout'),
            notEmpty: true
        },
        latitude: {
            type: Sequelize.DECIMAL,
            notEmpty: true
        },
        longitude: {
            type: Sequelize.DECIMAL,
            notEmpty: true
        },
    });

    return History;

}