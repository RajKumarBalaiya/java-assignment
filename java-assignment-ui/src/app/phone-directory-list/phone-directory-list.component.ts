import { Component, OnInit } from '@angular/core';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-phone-directory-list',
  templateUrl: './phone-directory-list.component.html',
  styleUrls: ['./phone-directory-list.component.css']
})
export class PhoneDirectoryListComponent implements OnInit {

  constructor(private javaServiceService: JavaServiceService) { }
  users = [];
  ngOnInit(): void {
    this.javaServiceService.getPhoneDirectoryList().subscribe(data => {
      this.users = data.searchWords;
    })
  }

}
