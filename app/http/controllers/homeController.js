
module.exports = function homeController() {
    return {
        async home(req, res) {
            // console.log(req.isAuthenticated())
            res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
            return res.render('home')
        },

         
    }
}
