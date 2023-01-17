function buildQuery(query, params) {
  if (!params) {
    return query;
  }

  queryStr = "";
  //you will first start with where when the query string is given
  //and will be the second parameter
  //params are the parameters within the query
  params.forEach((condition) => {
    if (queryStr) {
      queryStr += `AND ${condition}`;
    } else {
      queryStr += ` WHERE ${condition}`;
    }
  });

  return query + queryStr;
}

module.exports = {
  buildQuery,
};
