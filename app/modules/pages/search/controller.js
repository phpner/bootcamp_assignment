import {searchEntity} from "./model.js";

/**
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const searchGET = async (req, res = null) => {
    let searchString = req.query.title;

    if (!req.query.title) return res.render('pages/search', {search: searchString, articles: []});

    let articles = await searchEntity(searchString);

    return res.render('pages/search', {search: searchString, articles: articles});

};

