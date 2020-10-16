module.exports = function check(str, bracketsConfig) {
    let newBC = bracketsConfig.map(item => item.join('')); 
    let lengthOld = str.length;
    
      while(str.length > 0){
        for (let i=0; i < newBC.length; i++){
      str = str.replace(newBC[i], '');
        }
        if (str.length === lengthOld)
        return false;
        else if(str.length === 0)
        return true;
        else
        lengthOld = str.length;
      };
       
       
        
    }

