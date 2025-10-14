import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/index.js';

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

// Define the association between Resume and Experience
Resume.hasMany(Experience, { as: 'experiences' });
Experience.belongsTo(Resume);
Resume.hasMany(Education, { as: 'educations' });
Education.belongsTo(Resume);

export { Resume, Experience };
