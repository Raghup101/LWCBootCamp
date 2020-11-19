import { api,LightningElement } from 'lwc';
import JERRY_LOGO from '@salesforce/resourceUrl/JERRY_LOGO';
import TOM_LOGO from '@salesforce/resourceUrl/TOM_LOGO';

export default class IfElseDemo extends LightningElement {

    
    @api jerryPicURL = JERRY_LOGO;
    @api tomPicURL   = TOM_LOGO;
    
    @api toggle = false;
    showTom(){
        this.toggle = false;
    }
    showJerry(){
        this.toggle = true;
    }
    
}