import { Component, EventEmitter, Input, Output} from '@angular/core';
import { type User } from './user.model';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { CardComponent } from "../shared/card/card.component";


@Component({
    selector: 'app-user',
    // standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    // imports: [CommonModule, FormsModule, CardComponent]
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
