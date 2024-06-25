import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isSidebarOpen = true;
  isContentOpen = true;
  firstname = '';
  lastname = '';
  menuName = '';
  contents: any[] = [1,2,3,4,5,6,6,7,8,9,0];

  constructor()
  {
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    if(window.innerWidth<700 && this.isSidebarOpen){
      this.isContentOpen = false;
    }else{
      this.isContentOpen = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    if (window.innerWidth < 700) {
      if(this.isSidebarOpen){
        this.isSidebarOpen = false;
        this.isContentOpen = true;
      }
      else{
        this.isSidebarOpen = true;
        this.isContentOpen = false;
      }
    }
    else{
      this.isSidebarOpen = true;
        this.isContentOpen = true;
    }
  }
}
