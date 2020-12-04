import { LightningElement } from 'lwc';
const totalVal = 3;
export default class GrandParentCompoent extends LightningElement {
    
    count=0;
    total= totalVal;
    clickfromgp(event){
        alert(event.detail.stat);
         if(event.detail.stat=='Deselect'){
             this.count = this.count +1;
         }else{
            this.count = this.count -1;
         }
     }

    resetall(){
        this.count=0;
        this.template.querySelector('c-parent-component').reset();
    }
}