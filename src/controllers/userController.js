import User from "../models/User";

export const join = (req,res) => {
    res.render("join");
}

export const getJoin = (req,res) => {
    res.render("join");
}

export const postJoin = async(req,res) => {
    const {username, id, password, confirm} = req.body;
    if(password !== confirm) {
        return res.send("Error");
    }
    try {
    await User.create({
        username,
        id,
        password,
    })
    res.redirect("login"); }
    catch (error) {
        return res.send("Error");
    }
}

export const getLogin = (req,res) => {
    res.render("login");
}
