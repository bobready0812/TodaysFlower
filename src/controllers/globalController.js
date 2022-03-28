export const main = (req,res) => {
    return res.send("home");
}

export const choose = (req,res) => {
    res.send("회원 비회원");
}

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
