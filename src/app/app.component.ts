import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  membersArray: string[] = [];

  addMember() {
    this.membersArray.push(this.newMemberName);
    console.log(this.membersArray);
  }
  onInput(member: string) {
    console.log(this.newMemberName);
    this.newMemberName = member;
  }
}
