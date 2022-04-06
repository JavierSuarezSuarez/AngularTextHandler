import { Injectable } from '@angular/core';


//Injectable Service that performs the operations to the text given by ActionButtons
@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor() { }

  text=""; //Text received


  //Sets the text from ActionButtons 
  setInitialText(text: string) {
      this.text = text;
  }


  //Makes the desired operation depending on the parameter
  public operation( selection : string): string{

    switch (selection) {

      case "reverse":

        let charArray: string[] = this.text.split('');
        let reverseArray: string[] = charArray.reverse();
        let result = reverseArray.join('');
        return result;

      break;

      case "charcount":
        return "Número de caracteres: " + this.text.length;
      break;

      case "uppercase":
        return this.text.toUpperCase();
      break;

      case "lowercase":
        return this.text.toLowerCase();
      break;

      case "reset":
        return "Reset";
      break;

      case "base64":
        return btoa(this.text);
      break;

      case "decode":
        return atob(this.text);
      break;

      case "nospaces":

        let resultText="";

        for(let i= 0; i < this.text.length; i++) {
          if(this.text.charAt(i) != " ") {
            resultText += this.text[i];
          }
        }
        return resultText;
      break;
    }
    return "No se encuentra ninguna operación disponible";

  }
 
}
