export const link = (req,res) => {
    return res.render("link");
}

export const showFlower = (req,res) => {
    return res.send(`꽃병: ${req.params.FB_id2}`);
}

export const write = (req,res) => {
    return res.send(`꽃병: ${req.params.FB_id2} 쓰기`)
}