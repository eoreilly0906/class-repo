import express from 'express';
// Import sortData function
import sortData from './sortdata.js';
// Import the JSON data
import { readFileSync } from 'node:fs';
const termData = JSON.parse(readFileSync('src/terms.json', 'utf8'));
const app = express();
const PORT = 3003;
// Call a helper function to sort the data into a new array so we don't mutate the original data
const sortHelper = (type) => {
    const sortedData = [...termData];
    sortedData.sort(sortData('term', 'relevance', type));
    return sortedData;
};
// TODO: Add a comment describing the functionality of this route
// This route will return the terms in the database
app.get('/api/terms/', (req, res) => {
    // TODO: Add a comment describing the req.query object
    // The req.query object is an object that contains the query parameters of the request
    const hasQuery = Object.keys(req.query).length > 0;
    if (hasQuery && req.query.sort === 'dsc') {
        return res.json(sortHelper('dsc'));
    }
    if (hasQuery && req.query.sort === 'asc') {
        return res.json(sortHelper('asc'));
    }
    // If there is no query parameter, return terms
    return res.json(termData);
});
// TODO: Add a comment describing what this route will return
// It will return the term that matches the term in the request
app.get('/api/term/:term', (req, res) => {
    // TODO: Add a comment describing the content of req.params in this instance
    // The req.params is an object that contains the parameters of the request
    const requestedTerm = req.params.term.toLowerCase();
    const term = termData.find((term) => term.term.toLowerCase() === requestedTerm);
    if (term) {
        return res.json(term);
    }
    // Return a message if the term doesn't exist in our DB
    return res.json('No term found');
});
// TODO: Add a comment describing what this route will return
app.get('/api/terms/:category', (req, res) => {
    const requestedCategory = req.params.category.toLowerCase();
    const result = termData.filter((term) => term.category.toLowerCase() === requestedCategory);
    return res.json(result);
});
// TODO: Add a comment describing what this route will return
app.get('/api/categories', (_req, res) => {
    const categories = termData.map((term) => term.category);
    const result = categories.filter((cat, i) => categories.indexOf(cat) === i);
    return res.json(result);
});
app.listen(PORT, () => console.info(`Example app listening at http://localhost:${PORT}`));
