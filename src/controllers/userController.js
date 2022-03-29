import User from "../models/User";

export const join = (req,res) => {
    res.render("join");
}

export const getJoin = (req,res) => {
    res.render("join");
}

export const postJoin = async(req,res) => {
    const {username, id, password} = req.body;
    await User.create({
        username,
        id,
        password,
    })
    res.redirect("login");
}

export const getLogin = (req,res) => {
    res.send("login");
}
