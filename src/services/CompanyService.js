const { Op } = require('sequelize');
const Company = require('../models/Company');
const { readCsv } = require('../utils/csv');

module.exports = {
  importFromCsv: async (buffer) => {
    const { rows, diff } = readCsv(buffer);
    await Company.bulkCreate(rows);

    return diff;
  },

  mergeWithCsv: async (buffer) => {
    const { rows, diff } = readCsv(buffer);

    const companies = await Company.findAll();

    const toUpdate = [];

    companies.forEach((company) => {
      const filtered = rows.filter(row => {
        return row.name.includes(company.name) && row.zip.includes(company.zip)
      });

      if (filtered.length !== 1)
        return;

      toUpdate.push(company.update({ website: filtered[0].website }));
    });

    const result = await Promise.all(toUpdate);

    const mergeDiff = diff + (rows.length - result.length);

    return mergeDiff;
  },

  query: async (name, zip) => {
    const query = {
      where: {}
    };

    if (name)
      query.where.name = {
        [Op.like]: `%${name.toUpperCase()}%`
      }

    if (zip)
      query.where.zip = zip;

    const result = await Company.findAll(query);

    return result;
  }
}