import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-drag-drop-01';

  items = ['Item-1', 'Item-2', 'Item-3', 'Item-4'];

  activeItems = ['Item-5', 'Item-6'];

  doneItems = ['Item-7', 'Item-8', 'Item-9', 'Item-10'];

  dropItems(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
