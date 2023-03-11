import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

let  shopcode;
var tablecode;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  template: '<ion-nav [root]="root"></ion-nav>',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {  
  }
    public async startScan(){
      document.querySelector('body').classList.add('scanner-active');
      BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      if (result.hasContent) {
        console.log(result.content);
        document.querySelector('body').classList.remove('scanner-active');
          //we have a result
          var strToken = result.content.split(";");
          if (strToken) {
                      shopcode =strToken[0]; // this will contain "shopCode"
                      tablecode = strToken[1]; // this will contain "tableCode"
                  
          
                      // CALL PostRequest method to make post method call
                      this.postRequest();
          
          
                 
      }
    };
    
   


  
  }
  public async postRequest (){
    let xhr = new XMLHttpRequest();
    let dataToSend = encodeURIComponent("'req'")+ "=" + encodeURIComponent("ORDER") +"&"+encodeURIComponent("shop")+ "=" + encodeURIComponent(shopcode)+"&"+encodeURIComponent("tab")+ "=" + encodeURIComponent(tablecode);
  xhr.open("POST", "https://rapidserved.com/create_product.php");
  xhr.setRequestHeader("Accept", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  
  xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status);
    console.log(xhr.responseText);
  }};
  
  
  
  xhr.send(dataToSend);
  }
}
 

  