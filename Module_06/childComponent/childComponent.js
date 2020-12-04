import { LightningElement,api,track } from 'lwc';

export default class ChildComponent extends LightningElement {

    @api childname = 'Child';
    @track buttonLabel ='Select';
    @track varient ='success';

    buttonClick(event){
        this.buttonLabel = event.target.label == 'Select'?'Deselect':'Select';
        this.varient = event.target.label == 'Select'?'destructive':'success';
       
        const custEve = new CustomEvent(
            'clickbutton',
            {
                bubbles : true,
                composed : true,
                detail:{childname: this.childname,
                        stat :this.buttonLabel 
                        }
            }
            );
            this.dispatchEvent(custEve);
    }

    @api
    resetme(){
        this.buttonLabel = 'Select';
        this.varient='success';
    }
}