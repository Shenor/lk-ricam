const { Router } = require("express");
const router = Router();

router.post("/", (req, res) => {
    const {name, password} = req.body;

    if (name === 'ricam' && password=="qwe") {
      req.session.isAuthenticated = true;
      res.redirect("/user/0");
    } else {
      res.render("login", {
        isError: true
      });
    }

});

module.exports = router;
