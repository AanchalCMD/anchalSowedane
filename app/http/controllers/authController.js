const Profile = require('../../models/Profile')
const bcrypt = require('bcrypt')
const _ = require('lodash')
const passport = require('passport')
const { web3, contract } = require('../../config/web3')

module.exports = function authController() {


    return {
        login(req, res) {
            res.render('auth/login')
        },

        register(req, res) {
            res.render('auth/register')
        },

        profileDetails(req, res){
            res.render('auth/profileDetails')
        },


        // Front end validation when registering a user
        async postRegister(req, res) {

            const { email, password1 } = req.body;

            function showValuesAfterReloading() {
                req.flash('email', email)
                req.flash('password', password1)
            }



            // ALL FIELDS VALIDATION

            // Checking if a field is empty or not
            if (!email || !password1) {

                showValuesAfterReloading();

                if (!email) {
                    req.flash('emailValidation', 'Required');
                };
                if (!password1) {
                    req.flash('passwordRequired', 'Required');
                };
                return res.redirect('/register')

            }



            // EMAIL VALIDATION

            // Checking if the email entered is already been registered or not
            const gotAccounts = await web3.eth.getAccounts();

            let gotStruct = await contract.methods.allUsers(gotAccounts[0]).call();
            console.log(gotStruct)

            if (gotStruct.email != '') {
                req.flash('emailValidation', 'Email already taken');

                showValuesAfterReloading();

                return res.redirect('/register')
            }


            else {

                // req.flash('error', 'Transaction waiting to confirm . . .')

                try {
                    await contract.methods.register(password1, email).send({ from: gotAccounts[0] })
                    req.flash('error', 'Registered Successfully!')
                    return res.redirect('/register/profileDetails');
                }

                catch (err) {
                    if (err.code == 4001) {
                        req.flash('error', 'Transaction rejected!')
                    }
                    else {
                        req.flash('error', 'Transaction failed!')
                    }
                }


            }



            // // // Hashing Password
            // const salt = await bcrypt.genSalt(10);
            // user.password = await bcrypt.hash(user.password, salt)

            // try {
            //     await user.save();
            //     req.flash('success', 'User Registered Successfully');
            //     return res.redirect('/login');   
            // }

            // catch (err) {
            //     req.flash('error', 'Something went wrong')
            //     console.log('Not saved')
            //     console.log(err)
            //     return res.redirect('/register');
            // }
        },

        async postLogin(req, res, next) {

            const { email, password } = req.body


            // ALL FIELDS VALIDATION
            // Checking if a field is empty or not
            if (!email || !password) {
                req.flash('error', 'All Fields Required');
                return res.redirect('/login')
            }


            const gotAccounts = await web3.eth.getAccounts();
            let gotStruct = await contract.methods.allUsers(gotAccounts[0]).call();

            // User must not logged in already
            if (gotStruct.isLoggedIn == true) {
                req.flash('error', 'Already Logged in from this account!');
                console.log("1")
                return res.redirect('/login')
                

            }   

            // User should register first
            if (gotStruct.email == '') {
                req.flash('error', 'Account not registered!');
                console.log("2")
                return res.redirect('/login')

            }

            // Entered password must be correct
            if (web3.utils.soliditySha3(password) != gotStruct.password) {
                
                req.flash('error', 'Wrong Password!');
                console.log("3")
                return res.redirect('/login')


            }

            else {
                // req.flash('error', 'Transaction waiting to confirm . . .')
                console.log("4")

                
                try {
                    await contract.methods.login(password).send({ from: gotAccounts[0] })
                    req.flash('error', 'Login Successfully!')
                    return res.redirect('/');
                }

                catch (err) {
                    if (err.code == 4001) { 
                        req.flash('error', 'Transaction rejected!')
                    }
                    else {
                        req.flash('error', 'Transaction failed!')
                    }
                }


            }

            



        },

        async postProfileDetails(req, res) {

            const { name, phone, age, experience } = req.body;

            // ALL FIELDS VALIDATION

            // Checking if a field is empty or not
            if (!name || !phone || !age || !experience) {


                if (!name) {
                    req.flash('nameRequired', 'Required');
                };
                if (!phone) {
                    req.flash('phoneValidation', 'Required');
                };
                if (!age) {
                    req.flash('emailValidation', 'Required');
                };
                if (!experience) {
                    req.flash('passwordRequired', 'Required');
                };

                return res.redirect('/register/profileDetails')

            }

            // Else 
            // After all validation
            // save the user
            const profile = new Profile({
                name: req.body.name,
                phone: req.body.phone,
                age: req.body.age,
                experience: req.body.experience
            });

            // Encrypting data
            const salt = await bcrypt.genSalt(10);

            profile.name = await bcrypt.hash(profile.name, salt)
            profile.phone = await bcrypt.hash(profile.phone, salt)
            profile.age = await bcrypt.hash((profile.age).toString(), salt)
            profile.experience = await bcrypt.hash((profile.experience).toString() , salt)
            


            try {
                await profile.save();
                req.flash('success', 'Details Saved Successfully');
                return res.redirect('/login');
            } 

            catch (err) {
                req.flash('error', 'Something went wrong')
                console.log('Not saved')
                console.log(err)
                return res.redirect('/register/profileDetails');
            }
        },




        // LOGOUT
        logout(req, res, next) {
            req.logout();
            res.redirect('/login')
        }
    };

}
