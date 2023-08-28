const dataController = {
  async getSearched(req, res) {
    try {
      console.log(req.params);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=people&apiKey=${process.env.NEXT_PUBLIC_KEY}`,
        {
          cache: "no-cache",
        }
      );
      res.locals.data.articles = response;
      next();
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  },
};

const apiController = {
  getSearched(req, res, next) {
    res.json(res.locals.data.articles);
  },
};

module.exports = {
  dataController,
  apiController,
};
