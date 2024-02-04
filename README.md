# Full Stack Level 5 Bootcamp Assignment
## Oleksandr Vasyliev

> ### This project is running in the mode ECMAScript modules (ESM) instead of CommonJS modules.


```


js Install and run: npm install and then run node ./index.js 


```


> ### The project follows the MVC (Model-View-Controller) pattern
> ![](https://joxi.ru/vAWa9exTK1QwBm.jpg)


> ## Project structure
> ![](https://joxi.ru/LmG1BpzFbe96XA.jpg)

> * The 'modules' folder contains the 'MC' (Model-Controller) part of the MVC logic.
> * The 'view' folder represents the 'V' (View) in MVC logic.


> ### The file 'app/routers.js' contains the main router logic, including CRUD operations.
```js 
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
```

> This approach allows us to scale easily. For instance, if you need to add a new page, you can create a new module in the
> directory 'app/modules/pages' and then register it in the file 'app/routers.js'. Additionally, you should add the relevant
> view > to the folder 'app/views/pages'.

###  The main page

![](https://joxi.ru/E2p4ynwUV9MZP2.jpg)

### The articles page (CRUD)

![](https://joxi.ru/xAeqKXjh6pxQJA.jpg)

### Add new Article (CRUD)

![](https://joxi.ru/1A5PBJnHknyeG2.jpg)

### Action buttons (CRUD)

![](https://joxi.ru/Y2LJ9DWie9J0vr.jpg)

### Search page and form

![](https://joxi.ru/l2ZO9YyikwW9NA.jpg)

> ## TODO:
> * [x] CRUD
> * [ ] Integrate react admin or adminjs.
> * [ ] Implement authorization  and  RBAC (Role-based access control). 
