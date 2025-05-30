import { LightningElement } from 'lwc';

export default class ResponsiveLWC extends LightningElement {
    change = 'welcome DevOps';
    changeHandler(event){
        this.change = event.target.value;
    }
}