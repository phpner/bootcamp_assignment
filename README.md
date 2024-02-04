## Oleksandr Vasyliev

# Full Stack Level 5 Bootcamp Assignment

> 1. git clone https://github.com/phpner/bootcamp_assignment.git
> 2. Open the folder bootcamp_assignment
> 3. Run: npm install
> 4. Set up mongoose connection ./index.js
> 5. Run: node ./index.js
> 6. Open http://127.0.0.1:3000


> ### This project is running in the mode ECMAScript modules (ESM) instead of CommonJS modules.


> ### The project follows the MVC (Model-View-Controller) pattern
> ![](https://dl4.joxi.net/drive/2024/02/04/0031/2220/2087084/84/4e9ee4ebb2.jpg)


> ## Project structure
> * The 'modules' folder contains the 'MC' (Model-Controller) part of the MVC logic.
> * The 'view' folder represents the 'V' (View) in MVC logic.
> ![](https://dl3.joxi.net/drive/2024/02/04/0031/2220/2087084/84/387d89aa51.jpg)
>
> * This approach allows us to scale easily. For instance, if you need to add a new page, you can create a new module in the directory 'app/modules/pages' and then register it in the file 'app/routers.js'.
> * Additionally, you should add the relevant  view > to the folder 'app/views/pages'.


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

###  The main page

![](https://dl3.joxi.net/drive/2024/02/04/0031/2220/2087084/84/62301e52fe.jpg)
<hr>
### The articles page (CRUD)

![](https://dl4.joxi.net/drive/2024/02/04/0031/2220/2087084/84/132f237984.jpg)
<hr>
### Add new Article (CRUD)

![](https://dl3.joxi.net/drive/2024/02/04/0031/2220/2087084/84/9d279ce088.jpg)
<hr>
### Action buttons (CRUD)

![](https://dl4.joxi.net/drive/2024/02/04/0031/2220/2087084/84/7ba9d6fa73.jpg)
<hr>
### Search page and form

![](https://dl3.joxi.net/drive/2024/02/04/0031/2220/2087084/84/874266d2c1.jpg)
<hr>

> ## TODO:
> * [x] CRUD
> * [ ] Integrate react admin or adminjs.
> * [ ] Implement authorization  and  RBAC (Role-based access control). 
