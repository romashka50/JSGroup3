/**
 * Created by Roman on 20.08.2015.
 */
module.exports = (function(){
    var express = require('express');
    var UserHandelr = require('../handlers/user');
    var userRouter = express.Router();
    var userHandler = new UserHandelr();

    userRouter.get('/', userHandler.getAll);
    userRouter.delete('/:id', userHandler.remove);
    userRouter.post('/', userHandler.create);


    return userRouter;
})();