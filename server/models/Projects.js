module.exports = (sequelize, DataTypes) => {

    const Projects = sequelize.define("Projects", {
        projectName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        repoURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pipelineCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }      
    });

    Projects.associate = (models) => {
        Projects.hasMany(models.Pipelines, {
            onDelete: "cascade",
        });
    };

    return Projects;
}