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

accordionButton(num: number) {
  const btnArray = [document.getElementById("backend"), document.getElementById("frontend")]
  const collapseArray = [document.getElementById("backendCollapse"), document.getElementById("frontendCollapse")];

  let clickedButton = btnArray[num];
  let clickedCollapse = collapseArray[num];

  const notNum = Math.abs(num - 1);

  for (let i = 0; i < btnArray.length; i++) {
    if (i !== num && collapseArray[i]?.classList.contains('show')){
      collapseArray[i]?.classList.remove('show');
      btnArray[i]?.classList.add('collapsed');
    };
  }

  if (clickedCollapse?.classList.contains('show')){
    clickedButton?.classList.add('collapsed')
    clickedCollapse?.classList.remove('show')
    btnArray[notNum]?.classList.remove('collapse')
    collapseArray[notNum]?.classList.add('show')
  }
  else {
    clickedCollapse?.classList.add('show')
    clickedButton?.classList.remove('collapsed')
  };
};

}
