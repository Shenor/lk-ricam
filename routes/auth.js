const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
  res.render("login", {
    title: "Login lk.Ricam",
    classLoginScreen: 'bg-pattern'
  });
});

router.post('/', (req, res) => {
    const {name, password} = req.body;

    if (name === 'ricam' && password=="qwe") {
      req.session.isAuthenticated = true;
      req.session.save(err => {
        if (err) return console.error(err)
        
        res.redirect("/");
      });
    } else {
      res.render("login", {
        title: "Login lk.Ricam",
        classLoginScreen: 'bg-pattern',
        isError: true
      });
    }
});

router.get('/logout', (req,res) => {
  req.session.isAuthenticated = false;
  // req.session.destroy(() => {
    res.redirect('/auth');
    console.log(req.session);
  // });
});
 
module.exports = router;
