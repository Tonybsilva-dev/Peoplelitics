
function checkPasswordSecurity( password: string ){

/*
Moderate Method:

RULES:
Deve ter uma letra minúscula
Deve ter uma letra maiúscula
Deve ter um número
Deve ter pelo menos 8 caracteres

*/

const passwordCheck = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
const result = passwordCheck.test(password);

return result


}

export { checkPasswordSecurity };
