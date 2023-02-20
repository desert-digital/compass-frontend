import { Component } from '@angular/core';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent {
  title: string = 'Team Pre-charter Checklist';
  checklistCompleted: boolean = false;
  typesOfShoes: any[] = [
    { name: 'Team pre #1', selected: false },
    { name: 'Team pre #2', selected: false },
    { name: 'Team pre #3', selected: false },
    { name: 'Team pre #4', selected: false },
    { name: 'Team pre #5', selected: false }];

  onItemChecked(item: any) {
    item.selected = !item.selected;
    this.checklistCompleted = true;
    this.typesOfShoes.forEach( item => {
      this.checklistCompleted = this.checklistCompleted && item.selected;
    })
  }
}
