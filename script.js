
module.exports = is = {  
        string  : (data)=> typeof data == 'string'? true : false  , 
        number  : (data) => typeof data == 'number'? true : false , 
        boolean : (data) => typeof data == 'boolean'? true : false, 
        array   : (data) => data.constructor.toString().indexOf("Array") > -1 , 
        integer : (data) => Number.isInteger(data)? true : false,
        float   : (data) => Number.isInteger(data)? false : true,
        email   : (data) => {
                   var emailPattern = new RegExp(/[^\s@]+@[^\s@]+\.[^\s@]+/);
                    return emailPattern.test(data)? true : false
            },
        url     : (data) => {
                    var urlPattern = new RegExp('(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})')
                    return urlPattern.test(data)
            },
        ip      : (data) => {
                    var ipPattern = new RegExp('^(([01]?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))\.){3}([01]?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))$');
                    return ipPattern.test(data)? true : false
            }
    }
