import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-kittynews',
  templateUrl: './kittynews.component.html',
  styleUrls: ['./kittynews.component.css']
})
export class KittynewsComponent implements OnInit {

  kitty;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getCats().subscribe((data)=>{
      console.log(data);
      this.kitty = data['breeds'];
    });
  }

}
