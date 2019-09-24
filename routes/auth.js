const { Router } = require("express");
const router = Router();


router.get('/', (req, res) => {
  res.render("login");
});

router.post("/", (req, res) => {
    const {name, password} = req.body;

    if (name === 'ricam' && password=="qwe") {
      req.session.isAuthenticated = true;
      req.session.save(err => {
        if (err){throw err}
        
        res.redirect("/");
      });
    } else {
      res.render("login", {
        isError: true
      });
    }
});


router.get('/logout', (req,res) => {
  req.session.destroy(() => {
    res.redirect('/auth');
  });
});

 
module.exports = router;
