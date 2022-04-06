import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  inputSubheaderText="Introduce el texto que desees";
  textArea = ""; //This will be transfered to this component child (Action-Buttons)

  constructor() { }

  ngOnInit(): void {
  }

  //If its child (Action-Buttons) emits the reset event, the textArea will be cleared
  reset(flag: string) {
    if (flag == "true") {
      this.textArea="";
    }
  }

}
