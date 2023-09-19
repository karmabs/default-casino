// Ваш контроллер brand.js
'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::brand.brand', {
  async find(ctx) {
    const { request } = ctx;
    const filters = request.query.filters || {};

    // Проверяем, есть ли параметр category.id в фильтрах
    if (filters['category.id']) {
      // Если есть, фильтруем бренды по id категории
      const categoryId = filters['category.id'];
      return strapi.services.brand.find({ 'category.id': categoryId });
    } else {
      // Если параметр category.id отсутствует, возвращаем все бренды
      return strapi.services.brand.find({});
    }
  },
});
