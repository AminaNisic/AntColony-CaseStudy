module.exports = (sequelize, DataTypes) => {

    const Pipelines = sequelize.define("Pipelines", {
        pipelineName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        actions: {
            type: DataTypes.STRING(5000),
            allowNull: false
        },
        stateOfPipeline: {
            type: DataTypes.STRING,
            allowNull: false
        }      
    })

    return Pipelines;
}