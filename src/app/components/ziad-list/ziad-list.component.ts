import { Component } from '@angular/core';
import { ZiadService } from 'src/app/service/ziad.service';
@Component({
  selector: 'app-ziad-list',
  templateUrl: './ziad-list.component.html',
  styleUrls: ['./ziad-list.component.css']
})
export class ZiadListComponent {
  users: any[] = [];
  
  constructor(private ziadService: ZiadService) {}
  ngOnInit(): void {
    this.ziadService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }
}
