
exports.fiboCalculate = async(req,res) => {
    try{
        const {data,type} = req.body
        let Next = 0;
        //console.log(data.length);
        if(data.length <= 2){
            Next = 1;
        } else {
            Next = data[data.length-2]+data[data.length-1]
        }
        return res.json({next:Next,data:data});
    } catch(Err) {
        res.status(500).send('Server Error');
      
    }
 }

 exports.test = async(req,res) => {
    try{
      
      return res.send('test');

    } catch(Err) {
        res.status(500).send('Server Error');
      
    }
 }
