
module.exports = (function(){
    var express = require('express');
    var UserHandelr = require('../handlers/user');
    var userRouter = express.Router();
    var userHandler = new UserHandelr();

    userRouter.get('/', userHandler.getAll);
    userRouter.get('/:id', userHandler.getById);
    userRouter.delete('/:id', userHandler.remove);
    userRouter.post('/', userHandler.create);


    return userRouter;
})();