import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  post ;
  searchInput =  '';


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getdata1();
  }
  private getdata1() {
    this.dataService.getdata().subscribe(data => {
      this.post = data;
      const countryCode = 'IND';
      for( let i = 0 ; i < this.post.length ; i++){
        if(this.post[i].alpha3Code === countryCode){
          console.log(this.post[i]);
        }
      }
    });
  }

  search() {
    let count = 0
    const filterResult = [];
    this.post.forEach(item => {
      if (item.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
        filterResult.push(item);
        count = count + 1;
      }
      this.post = filterResult;
    });
  }

  // manipulateTime(timezone) {
  //   const timez = timezone.replace('UTC','').replace(':','.');
  //   const intTimeZone = parseInt(timez.toString());
  //   const d = new Date();
  //   const localTime = d.getTime();
  //   const localOffset = d.getTimezoneOffset() * 60000;
  //   const utc = localTime + localOffset;
  //   const newCalTime = utc + (3600000 * intTimeZone);
  //   return new Date(newCalTime).toLocaleDateString() + ' : ' + new Date(newCalTime).toLocaleTimeString();
  // }

}
