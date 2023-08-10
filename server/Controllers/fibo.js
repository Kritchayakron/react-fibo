
exports.fiboCalculate = async(req,res) => {
    try{
        const {data,type} = req.body
        let Next = 0;
        if(data.length == 1) {
            Next = data[0]
        } else {
            if(type == 'plus') {
                Next = data[data.length-2]+data[data.length-1]
            } else {
                if(data.length <= 3) {
                    Next = 1
                } else {
                    Next = data[data.length-4]+data[data.length-3]
                }
            }
        }
      return res.json({next:Next});

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
