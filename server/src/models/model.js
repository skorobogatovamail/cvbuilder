const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/index');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'USER',
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

class Resume extends Model {}

Resume.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Resume',
  }
);

class Experience extends Model {}

Experience.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    },
    dateStart: {
      type: DataTypes.DATE,
    },
    dateEnd: {
      type: DataTypes.DATE,
    },
    resumeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Resume,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Experience',
  }
);

class Education extends Model {}

Education.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
  universityName: {
    type: DataTypes.STRING,
  },
  specialization: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  dateStart: {
    type: DataTypes.DATE,
  },
  dateEnd: {
    type: DataTypes.DATE,
  },
  resumeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Resume,
      key: 'id',
    },
  },
});

User.hasMany(Resume, { as: 'resumes' });
Resume.belongsTo(User);
Resume.hasMany(Experience, { as: 'experiences' });
Experience.belongsTo(Resume);
Resume.hasMany(Education, { as: 'educations' });
Education.belongsTo(Resume);

module.exports = { User, Resume, Experience, Education };
