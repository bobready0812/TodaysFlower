export const main = (req,res) => {
    return res.render("home");
}

export const choose = (req,res) => {
    res.send("회원 비회원");
}

export const join = (req,res) => {
    res.send("Join Now");
}

export const login = (req,res) => {
    res.send("Login");
}
