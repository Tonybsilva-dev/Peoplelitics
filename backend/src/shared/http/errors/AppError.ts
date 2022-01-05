class Error{

    public readonly message: string;
    public readonly statusCode: number;
  
    constructor(message: string, statusCode = 400, data?: any){
      this.message = message;
      this.statusCode = statusCode;
    }
  }
  
  export default Error