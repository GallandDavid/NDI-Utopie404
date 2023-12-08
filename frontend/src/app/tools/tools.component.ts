import { ChangeDetectorRef, Component } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document, private cdr: ChangeDetectorRef) { }

  changeToLumineux() {
    this.document.documentElement.style.setProperty('--background-tools', 'rgb(255,255,255)');
    this.document.documentElement.style.setProperty('--background-tools-button', 'rgb(255,255,255)');
    this.document.documentElement.style.setProperty('--color-tools-button', 'rgb(0, 0, 0)');
    this.cdr.detectChanges();
  }

  changeToSombre() {
    this.document.documentElement.style.setProperty('--background-tools', 'rgb(20,20,20)');
    this.document.documentElement.style.setProperty('--background-tools-button', 'rgb(30,30,30)');
    this.document.documentElement.style.setProperty('--color-tools-button', 'rgb(200, 200, 200)');
    this.cdr.detectChanges();
  }

  changeToVert() {
    this.document.documentElement.style.setProperty('--background-tools', 'rgb(14, 90, 14)');
    this.document.documentElement.style.setProperty('--background-tools-button', 'rgb(14, 90, 14)');
    this.document.documentElement.style.setProperty('--color-tools-button', 'rgb(210, 210, 210)');
    this.cdr.detectChanges();
  }

  changeToDaltonnien() {
    this.document.documentElement.style.setProperty('--background-tools', 'rgb(14, 90, 14)');
    this.document.documentElement.style.setProperty('--background-tools-button', 'rgb(14, 90, 14)');
    this.document.documentElement.style.setProperty('--color-tools-button', 'rgb(210, 210, 210)');
    this.cdr.detectChanges();
  }

}
