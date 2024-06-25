import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarOpen = true;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    // if(window.innerWidth<700 && this.isSidebarOpen){
    //   this.isContentOpen = false;
    // }else{
    //   this.isContentOpen = true;
    // }
  }

  closeSidebar(){

  }
}
