const CompanyService = require('../services/CompanyService');

module.exports = {
  importFromCsv: async (req, res) => {
    if (!req.files.csv)
      return res.status(400).json({ msg: 'no file uploaded' });

    try {
      const diff = await CompanyService.importFromCsv(req.files.csv.data);

      if (diff !== 0)
        return res.status(200).json({ msg: `companies created, but with ${diff} invalids` });

      return res.status(200).json({ msg: 'all companies created' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  },

  mergeWithCsv: async (req, res) => {
    if (!req.files.csv)
      return res.status(400).json({ msg: 'no file uploaded' });

    try {
      const diff = await CompanyService.mergeWithCsv(req.files.csv.data);

      if (diff !== 0)
        return res.status(200).json({ msg: `companies merged, but with ${diff} invalids on csv` });

      return res.status(200).json({ msg: 'all companies on csv has been merged' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  },

  query: async (req, res) => {
    const { name, zip } = req.query;

    try {
      const result = await CompanyService.query(name, zip);

      if (result.length === 0)
        return res.status(404).json({ msg: 'not found' });

      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'internal server error' });
    }
  }
}