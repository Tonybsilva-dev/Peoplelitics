function checkValidEmail( email: string ){

    const emailCheck = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/gmi;
    const result = emailCheck.test(email);
    
    return result
    
    
    }
    
    export { checkValidEmail };