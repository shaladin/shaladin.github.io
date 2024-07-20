import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize, takeUntil, tap } from 'rxjs';
import { User } from 'src/app/core/database/entities/user';
import { UserDaoService } from 'src/app/core/database/user.dao.service';

@Component({
  selector: 'app-account-paging',
  standalone: true,
  providers: [UserDaoService],
  templateUrl: './account-paging.component.html',
  styleUrl: './account-paging.component.scss'
})
export class AccountPagingComponent implements OnInit {
  isLoading: boolean = true;
  data = "";

  private users: User[];

  constructor(private userDao: UserDaoService, private http: HttpClient) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userDao.getAll().subscribe((users) => {
      if (users) {
        this.users = users as User[];
        console.table(this.users);
      }  
    });

    this.http.post('http://localhost:3000/api/fou/v1/Notification/SendToUser', {})
    .subscribe(resp => this.data = JSON.stringify(resp));
  }
}
