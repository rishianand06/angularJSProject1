
//Features of Typescript
// 3) Union - TS

class HomeLoan{

}

class CarLoan{

}

type LoanType = HomeLoan | CarLoan;

function loanApproval(loan: LoanType):void {
    if(loan instanceof HomeLoan){
        console.log("Home loan");
    }
    else console.log("Car loan");
   
}

loanApproval( new HomeLoan());
loanApproval( new CarLoan());