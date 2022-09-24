const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')



module.exports = function initializeRoutes(app) {

    // Home
    app.get('/', homeController().home);


    // Register
    app.get('/register', authController().register);
    app.post('/register', authController().postRegister);

    // Profile Details
    app.get('/register/profileDetails', authController().profileDetails);
    app.post('/register/profileDetails', authController().postProfileDetails);

    // Login
    app.get('/login',  authController().login);
    app.post('/login', authController().postLogin);



    


};