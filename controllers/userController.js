const {response } = require('express');





const Userget = (req, res=response) => {

    const query = req.query;

    res.status(200).json({
        ok: true,
        msg: 'get  - API' , query
    });
    }



    

const Userput = (req, res=response) => {

    const id = req.params.id;   

    const data= req.body;
    const{name,email}=data;

    res.status(400).json({
        ok: true,
        msg: 'put API' , id, data, name, email
    });
    }



const Userpost = (req, res=response) => {

    const data= req.body;

    const{name,email}=data;


    res.status(201).json({
        ok: true,
        msg: 'post API', data, name, email
    });
    }



const Userdelete = (req,  res=response) => {
    res.status(500).json({
        ok: true,
        msg: 'delete API'
    });
    }

const Userpatch = (req,  res=response) => {
    res.status(200).json({
        ok: true,
        msg: 'patch API'
    });
    }

    

module.exports = {
    Userget,
    Userput,
    Userpost,
    Userdelete,
    Userpatch
}
