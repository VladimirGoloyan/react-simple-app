exports.init = function(data){
    this.rawData = data;
};

exports.getAllData = function(){
    return this.rawData;
};

exports.getCategories = function(){
    return this.rawData.categories;
};

exports.getUsers = function(){
    return this.rawData.users;
};

exports.getProducts = function(){
    return this.rawData.products;
};

