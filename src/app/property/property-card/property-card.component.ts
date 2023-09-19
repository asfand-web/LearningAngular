import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',

    //template: `<h1>i am card</h1>`,
    templateUrl: 'property-card.component.html',

    }
)
    
export class PropertyCardComponent{

    property: any ={
        "Id":1,
        "Type":"House",
        "Name":"Asfand house",
        "Price":12000
    }

}