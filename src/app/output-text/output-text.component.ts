import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-text',
  templateUrl: './output-text.component.html',
  styleUrls: ['./output-text.component.css']
})
export class OutputTextComponent implements OnInit {

  outputSubheaderText="Resultado de la operación que has seleccionado";
  @Input() resultText = ""; // Receives the result text from its father (ActionButtons)

  

  constructor() { }

  ngOnInit(): void {
  }

}
