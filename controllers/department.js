const Departments= require('../models').Department;


module.exports={
    init(req,res){
        const { payload: { id } } = req; 
    return (Users.findById({id:id})).
    then((user)=>{
      if(!user) {
        return res.sendStatus(401);
      }
      else{
        if(user.role==='Admin'){
          const {Name}=req.body;
          const initDepartment= {Name};
          if ( !Departments.findOne({ Dname: initDepartment.Name})) {
            res.sendStatus(401)
           }
          const finalDepartment = new Departments(initDepartment);
        
          return finalDepartment.save().then(()=>{
            res.sendStatus(201);
          }).catch(()=>{
            res.sendStatus(400)
          });
        }
        }
       
    });
    },
    list(req,res){
        Departments.find({})
        .then((departments)=>{
          res.send(departments);
        })
        .catch((err)=>{
          res.send(err);
        })
    }
}