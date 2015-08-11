/**
 * Created by Roman on 11.08.2015.
 */
var http = require('http');//load apropriate module, in our case we have standard node module, please read https://nodejs.org/api/


//in first time please initiate packedge.json --> npm init

/*npm - node package manager, установлюється разом з NodeJS,
всі модулі, сторонні можна знайти npm-сховищі - https://www.npmjs.com/
*/

//Для того щоб встановити модуль, необхідно - npm install --save, save - тоді необхідно, коли потр створити запис у package.json


//Щоб встановити всі модулі, описані в package.json, необхідно - npm i фбо npm install
//process.env.NODE_ENV = 'production';
console.log(process.env);