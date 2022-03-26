// import models
const Equipment = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const EquipmentTag = require('./EquipmentTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Equipment, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Equipment.belongsToMany(Tag, {
  through: EquipmentTag,
  foreignKey: 'equipment_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Equipment, {
  through: EquipmentTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Equipment,
  Category,
  Tag,
  EquipmentTag,
};
