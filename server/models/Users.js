module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }    
    });

    Users.associate = (models) => {
        Users.hasMany(models.Projects, {
            onDelete: "cascade",
        });
        Users.hasMany(models.Pipelines, {
            onDelete: "cascade",
        }); 
    };

    return Users;
}