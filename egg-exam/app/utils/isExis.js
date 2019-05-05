exports.isExis = async (options) => {
    let {
        tableName,
        app,
        where,
        columns
    } = options;
    let result = await app.mysql.select(tableName,{
        where,columns
    });
    return {data:result,isExis:result.length > 0};
}

/**
 * 保留对象的字段为数组中指定的字段
 */
exports.retainObj = (arr,obj) => {
    let newObj = {};
    for(let i in obj){
        if(arr.indexOf(i) !== -1){
            newObj[i] = obj[i];
        }
    }
    return newObj;
}