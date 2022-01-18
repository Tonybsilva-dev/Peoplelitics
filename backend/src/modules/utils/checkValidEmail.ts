function checkValidEmail( email: string ){

    const emailCheck = /^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/gm;
    const result = emailCheck.test(email);
    
    return result
    
    
    }
    
    export { checkValidEmail };