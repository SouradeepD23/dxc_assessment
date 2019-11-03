export interface Wallet{
    email:string;
    name:string;
    password:string;
    shortId:string;
    balance:number;
    kycStatus:number;
    securityQuestionOne:string;
	securityQuestionTwo:string;
	answerOne:string;
    answerTwo:string;
    transact:string[];
}