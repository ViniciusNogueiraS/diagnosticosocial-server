"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('eventosQuestionarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            idEvento: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'eventos',
                    key: 'id'
                },
                allowNull: false
            },
            idQuestionario: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'questionarios',
                    key: 'id',
                },
                allowNull: false
            },
            quantidadePorEnquete: {
                allowNull: false,
                type: Sequelize.SMALLINT
            },
            ordem: {
                allowNull: false,
                type: Sequelize.SMALLINT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('eventosQuestionarios');
    }
};
