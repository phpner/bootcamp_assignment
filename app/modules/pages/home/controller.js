/**
 * @param req
 * @param res
 */
export const homeGET = (req, res = null) => {
    let results = [
        {name: "Will Smith", awards: Math.floor(Math.random() * 10) + 1, films: 10},
        {name: "Cameron Diaz", awards: Math.floor(Math.random() * 10) + 1, films: 18},
        {name: "Julianne Moore", awards: Math.floor(Math.random() * 100) + 1, films: 21}
    ]

    res.render('pages/home', {results});
};

