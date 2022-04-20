module.exports = {
  readCsv: (buffer) => {
    const fileString = buffer.toString();

    const rows = fileString.split(/\r?\n/);
    rows.shift();

    if (rows.length <= 1)
      throw { status: 400, msg: "csv is empty" };

    const parseRows = rows.reduce((result, row) => {
      const [name, zip, website] = row.split(';');

      if (!name || !zip)
        return result;

      if (zip.length !== 5)
        return result;

      result.push({ name: name.toUpperCase(), zip, website: website ? website.toLowerCase() : null });
      return result;
    }, [])

    return { rows: parseRows, diff: rows.length - parseRows.length };
  }
}