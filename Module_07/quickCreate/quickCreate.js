import { LightningElement } from 'lwc';


export default class QuickCreate extends LightningElement {
    
    showAllAcc=false;
    showAllCon=false;
    showAllOpp=false;
        
    handleAccReset(){
        const accinputFields = this.template.querySelectorAll('.acc');
        if(accinputFields){
            accinputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleConReset(){
        const coninputFields = this.template.querySelectorAll('.con');
        //ShowToastMessage();
        if(coninputFields){
            coninputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleOppReset(){
        const oppinputFields = this.template.querySelectorAll('.opp');
        //ShowToastMessage();
        if(oppinputFields){
            oppinputFields.forEach(field => {
                field.reset();
            });
        }
    }

    handleShow(event){
        if(event.target.name === "allAcc"){
            this.showAllAcc = !this.showAllAcc;
        }
        else if(event.target.name === "allCon"){
            this.showAllCon = !this.showAllCon;
        }
        else if(event.target.name === "allOpp"){
            this.showAllOpp = !this.showAllOpp;
        }
    }


   
   
}