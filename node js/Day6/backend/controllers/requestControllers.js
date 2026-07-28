let arr = [1,2,3,4,5,6,7]

   export const requestbody = (req, res) => {
    console.log(req.body)

    res.json({message: "Success",data: req.body});
};

   export const paramdata = (req, res) => {
    console.log(req.params)

    res.json({message: "Success",data: req.params});
};

   export const queryparam = (req, res) => {
    console.log(req.query)

    res.json({message: "Success",data: req.query});
};

   export const headersinfo = (req, res) => {
    console.log(req.headers)

    res.json({message: "Success",data: req.headers});
};


   export const getdatas = (req, res) => {
    
    // res.send("this is response from send ")
    // res.json({'myarr':arr})
    res.status(501)

};






