import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnter,
  CdkDragExit,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
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
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  entered(event: CdkDragEnter<string[]>) {
    console.log('Entered', event.item.data);
  }

  exited(event: CdkDragExit<string[]>) {
    console.log('Exited', event.item.data);
  }

  specialUseCase(drag?: CdkDrag, drop?: CdkDropList) {
    if (drop?.data.lenght <= 2) {
      console.log(
        "Can't drop you because there aren't enough items in 'Active'"
      );
      return false;
    }

    const allowedItems = ['Item-3', 'Item-4', 'Item-7'];

    if (allowedItems.indexOf(drag?.data) === -1) {
      console.log("Can'it drop you because only Item 3, 4, 7 are allowed here");
      return false;
    }

    return true;
  }
}
