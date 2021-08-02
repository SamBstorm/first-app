import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coucou',
  templateUrl: './coucou.component.html',
  /*template: `<h1>Ceci est une balise html dans mon TS</h1>`,*/
  styleUrls: ['./coucou.component.scss', './coucou.h1.component.scss']
})
export class CoucouComponent implements OnInit, OnDestroy {

  constructor() { 
    console.warn('Je me construit!')
  }

  ngOnDestroy(): void {
    console.error('Ho! Diantre! Je me meurs!');
  }

  ngOnInit(): void {
    console.log("Youpi je suis en vie!")
  }

}
