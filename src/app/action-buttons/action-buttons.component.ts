import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OperationService } from '../operation.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent implements OnInit {

  actionSubheaderText="Selecciona la operación que desees realizar";

  @Input() initialText = ''; //Receives the textArea from its father (InputText)
  @Output() flag = new EventEmitter<string>(); //Can emit a event to its father (InputText)

  result=""; //Resulting text where service result is stored

  //A service that will perform the operations is Inyected
  constructor(private _operationService: OperationService) { }

  ngOnInit(): void {
  }


  //Depending on the parameter, the Service will know what operation to perform
  doOperation(selection: string) {

    this._operationService.setInitialText(this.initialText); //Sets the service text to the textArea received from its father (InputText)
    this.result = this._operationService.operation(selection); //Receives the text with the operation performed

  
    //If the operation made whas a reset, emits a flag to reset its father (InputText) textArea
    if (this.result == "Reset") {
        this.flag.emit("true");
    }
    
  }
}
