import { Component, OnInit } from '@angular/core';
import { JavaServiceService } from '../java-service.service';

@Component({
  selector: 'app-anagrams',
  templateUrl: './anagrams.component.html',
  styleUrls: ['./anagrams.component.css']
})
export class AnagramsComponent implements OnInit {
  AnagramsList: any;
  results: any;
  isSubmit!: boolean;
  letters = /^[a-zA-Z,]*$/;
  isTextValid!: boolean;
  isTextEmpty!: boolean;

  constructor(private javaService: JavaServiceService) { }

  ngOnInit(): void {
  }
  onChange(event: any) {
    this.isTextEmpty = false;
    this.isTextValid = false;
    this.isSubmit = false;
    this.AnagramsList = event.target.value
    if (!this.AnagramsList.length) {
      this.isTextEmpty = true;
    }
    else {
      this.isSubmit = true;
    } if (this.AnagramsList.length && !this.AnagramsList.match(this.letters)) {
      this.isTextValid = true;
    }
  }
  openModal() {
    const buttonModal = document.getElementById("openModalButton")
    this.javaService.getAnagrams(this.AnagramsList).subscribe((data: any) => {
      this.results = data.results.substring(1, data.results.length - 1);
    })
  }
}
