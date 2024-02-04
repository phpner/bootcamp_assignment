import * as article  from "./model.js";

/**
 * @param req
 * @param res
 */
export const articlePOST = (req, res = null) => {
    article.createEntity(req.body)
        .then(r => res.redirect('/articles'))
        .catch(err => console.error(err));
};

/**
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const articleGET = async (req, res = null) => {
    let articles =  await article.getAllEntity();
    return res.render('pages/article', {articles: articles});
};

/**
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const articleEDIT = async (req, res = null) => {
    let articleData =  await article.getEntity(req.params.id);
    return res.render('pages/articleEdit', {article: articleData});
};

/**
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const articlePUT = async (req, res = null) => {
    await article.editEntity(req.body.id, req.body);
    return res.redirect('/articles');
};

/**
 * @param req
 * @param res
 * @returns {Promise<*>}
 */

export const articleDELETE = async (req, res = null) => {
    let articles =  await article.deleteEntity(req.params.id);
    return res.send({articles: articles});
};
