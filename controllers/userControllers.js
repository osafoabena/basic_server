const user = require("../models/user")

 

function getAllInfo(req,res){

    user.find({})

    .then(

        function (data) {

            res.status(200).json({sucess:true, message:'All info retrived', data})

        }

    ).catch(function (error) {

        res.status(404).json({sucess:false, message:'Info not retrived'+error.message})

    })

};

function postInfo(req,res){

    user.create({

        "first_name":"Erica",
        "last_name":"Jackson",
        "school" : "KSTS",
        "date_of_birth" : 1998-05-01,

    },

    {

        "first_name":"Bene",
        "last_name":"Sprinkle",
        "school" : "St.Mary's",
        "date_of_birth" : 1995-07-14,

    },

    {

        "first_name":"Elsie",
        "last_name":"Moore",
        "school" : "Krobo Shs",
        "date_of_birth" : 1999-04-01,

       

    })

    .then(

        function (data) {

            res.status(200).json({sucess:true, message:'Info created', data})

        }

    ).catch(

        function (error) {

        res.status(404).json({sucess:false, message:'Info not created: '+error.message})

    })

};

 

module.exports = {getAllInfo,getInfoById,postInfo,deleteInfoById,updateInfoById};