import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class PortfolioComponent {

clickedButton(num: number) {
  const tabArray = [document.getElementById("website"), document.getElementById("profile"), document.getElementById("contact")];
  const btnArray = [document.getElementById("website-tab"), document.getElementById("profile-tab"), document.getElementById("contact-tab")];

  let clickedButton = btnArray[num];
  let clickedTab = tabArray[num];

  if (clickedButton?.classList.contains('active')) {}
  else {
    clickedButton?.classList.add("active");
    clickedTab?.classList.add("active");
  };

  for (let i = 0; i < btnArray.length; i++){
    if (i !== num && btnArray[i]?.classList.contains('active')){
      btnArray[i]?.classList.remove("active");
      tabArray[i]?.classList.remove("active");
    }
  }
};

accordionButton() {
  const backBtn = document.getElementById("backend");
  const frontBtn = document.getElementById("frontend");
  const backendCollapse = document.getElementById("backendCollapse");
  const frontCollapse = document.getElementById("frontendCollapse");

  backBtn?.classList.toggle("collapsed");
  frontBtn?.classList.toggle("collapsed");
  backendCollapse?.classList.toggle("show");
  frontCollapse?.classList.toggle("show");
};

}
