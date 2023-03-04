import { Component } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor() {}
  public async clicked(event) {
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");
    const loginbox = document.getElementById("loginbox");
    const signupbox = document.getElementById("signupbox");
    
    var X=event.currentTarget.getAttribute('id');
   
    function slideUp(el) {
      var elem = document.getElementById(el);
      elem.style.transition = "all 2s ease-in-out";
      elem.style.height = "0px";
      elem.style.display = "inline";
      
    }
    function slideDown(el) {
      var elem = document.getElementById(el);
      elem.style.transition = "all 2s ease-in-out";
      elem.style.height = "400px";
      elem.style.display = "none";
    }
    
    if(X=='signup')
    {
          login.classList.remove('select'); // To Remove
          signup.classList.add('select'); // To ADD
          slideUp("loginbox");
          slideDown("signupbox");
    }
    else
    {
      signup.classList.remove('select'); // To Remove
      login.classList.add('select'); // To ADD 
      slideUp("signupbox");
      slideDown("loginbox");
    }
  
    }
    

}

