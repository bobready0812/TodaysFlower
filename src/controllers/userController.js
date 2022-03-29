export const join = (req,res) => {
    res.render("join");
}

export const postJoin = (req,res) => {
    console.log(req.body);
    res.redirect("/");
}

export const login = (req,res) => {
    res.send("login");
}
