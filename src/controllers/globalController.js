export const main = (req,res) => {
    return res.send("home");
}

export const choose = (req,res) => {
    res.send("회원 비회원");
}

export const prac = (req,res) => {
    res.send("연습용");
}
