export const see = (req, res) => res.send("Home Page Videos"); 
export const upload = (req, res) => res.send("Upload");
export const edit = (req, res) => {
    return res.send("Edit")
}
export const deleteVideo = (req,res) => {
    return res.send("Delete Video");
}