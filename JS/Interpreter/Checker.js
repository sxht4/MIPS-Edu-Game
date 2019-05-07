/**
 * demo implement
 * check the result of users codes 
 * @class Checker
 */
class Checker {
    constructor(code_panel,r,m){
        this.code_panel=code_panel;
        this.r=r;
        this.m=m;

    }
    check(){

        throw 'error this should not be called'
    }
}
module.exports=Checker;