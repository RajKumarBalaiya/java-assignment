import { Component, OnInit } from '@angular/core';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.css']
})
export class PhoneDirectoryComponent implements OnInit {
  matchingWords: Array<String> = [];
  constructor(private javaService: JavaServiceService) { }

  ngOnInit(): void {
  }
  onChangeEvent(event: any) {

  }
  onChange(event:any) {
    if(event.target.value.length)
    this.javaService.getPhoneDirectory(event.target.value).subscribe(data => {
      this.matchingWords=data.searchWords;
    });
  }
}
