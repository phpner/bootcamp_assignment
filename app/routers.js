import express from 'express';
const router = express.Router();
import {articleDELETE, articleEDIT, articleGET, articlePOST, articlePUT} from "./modules/pages/article/controller.js";
import {homeGET} from "./modules/pages/home/controller.js";
import {searchGET} from "./modules/pages/search/controller.js";

// Main page
router.get('/', homeGET);

/*** CRUD **/

//Article
router.get('/articles', articleGET);
router.get('/article/:id', articleEDIT);
router.post('/article', articlePOST);
router.put('/article', articlePUT);
router.delete('/article/:id', articleDELETE);

//Search
router.get('/search/:title?', searchGET);

export default router;
