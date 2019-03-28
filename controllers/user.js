const Users= require('../models').User;


module.exports={
    register(req,res){
      console.log("helloworld");
       const user = req.body;
       console.log(user);
       
        if(!user.userName) {
            return res.status(422).json({
              errors: {
                userName: 'is required',
              },
            });
          }
          if(!user.password) {
            return res.status(422).json({
              errors: {
                password: 'is required',
              },
            });
          }
          if(!user.role) {
            return res.status(422).json({
              errors: {
                role: 'is required',
              },
            });
          }           
           Users.findAll({where: {userName:user.userName},
          }).then((u)=>{
           if(u!=null){
            const finalUser = new Users();
            finalUser.userName=user.userName;
            finalUser.role=user.role;
            finalUser.setPassword(user.password);
            return finalUser.save()
            .then(() =>{
              res.json({ user: finalUser.toAuthJSON() })
            }); 
           }
          });
          }
          
        ,
        login(req,res){
            const { body: { user } } = req;

            if(!user.userName) {
              return res.status(422).json({
                errors: {
                  userName: 'is required',
                },
              });
            }
          
            if(!user.password) {
              return res.status(422).json({
                errors: {
                  password: 'is required',
                },
              });
            }
          
            return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
              if(err) {
                return next(err);
              }
          
              if(passportUser) {
                const user = passportUser;
                user.token = passportUser.generateJWT();
          
                return res.json({ user: user.toAuthJSON() });
              }
          
              return status(400).info;
            })(req, res, next);
        }
      }
  
     
