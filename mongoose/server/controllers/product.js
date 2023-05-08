const {connection}=require("../configdatabase/config")

module.exports={
    createproduct:((req,res)=>{
        const query=`insert into product (image,price,title,description) values("${req.body.image}","${req.body.price}","${req.body.title}","${req.body.description}")`
    connection.query(query,(err,result)=>{
        err ? res.status(500).send(err): res.status(201).send("product added")
    })
    })
}