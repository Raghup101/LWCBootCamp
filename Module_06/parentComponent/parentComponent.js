import { LightningElement,api,track } from 'lwc';

export default class ParentComponent extends LightningElement {

    
    @track childs =[
            {
                stat:'Deselected',
                childname: 'Child One'
            },
            {
                stat:'Deselected',
                childname: 'Child Two'
            },
            {
                stat:'Deselected',
                childname: 'Child Three'
            }];

    clickfromparent(event){
        this.childs.forEach( ch=>{
            if(ch.childname == event.detail.childname){
                ch.stat= event.detail.stat == 'Select'?'Deselected':'Selected';
            }  
        });

        
    }

    
    @api
    reset(){
        this.childs.forEach( ch=>{
            ch.stat='Deselected';
        });
        const child= this.template.querySelectorAll('c-child-component');
        console.log('child : '+child);
        if(child){
            child.forEach(ch=>{
                ch.resetme();  
            });
            
        }
    }
    
}