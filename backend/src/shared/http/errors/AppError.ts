class Error{

    public readonly message: string;
    public readonly statusCode: number;
    public readonly data?: Object
  
    constructor(message: string, statusCode = 400, data?: Object){
      this.message = message;
      this.statusCode = statusCode;
      this.data = data
    }
  }
  
  export default Error