const Router = require('express');

const router = new Router();

router.get('/get-qoute', async (req, res, next) => {
   const QUOTE_URL = 'https://api.forismatic.com/api/1.0/?lang=en&format=json&method=getQuote';
   try {
      const response = await fetch(QUOTE_URL);

      if (!response.ok) {
         throw Error('Error while fetching forismatic.com');
      }

      const result = await response.json();

      const { quoteText, quoteAuthor } = result;

      res.status(200).send({ data: { quoteText, quoteAuthor } });
   } catch (error) {
      res.statusCode = 500;
      res.json({ message: error?.message ?? error });
   }
});

module.exports = router;
