 var submtBtn=document.getElementById("btn");
        submtBtn.addEventListener("click",function(e){
            e.preventDefault();
            var loanAmt=Number(document.getElementById("ln_amt").value);
            var loanTrm=Number(document.getElementById("ln_trm").value);
            var intRate=Number(document.getElementById("int_rte").value);
            var intNet=intRate/100;
            var onePlus=(1+intNet)**(loanTrm);
            var emi= (loanAmt*intNet)*onePlus/(onePlus-1);
            emi=Math.round(emi);
            var result=document.getElementById("rslt_txt");
            var emiMnth=emi/loanTrm;
            result.innerText="Your EMI amount is: " + emi;
            console.log("the emi is",emi);
        });
