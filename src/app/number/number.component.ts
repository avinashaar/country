import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  public number: any;
  @Input() item;
  post1;


  post;
  countryDetail;
  bor: any;
  bod;


  br = [];
  lan = [];


  ngOnInit() {
    this.number = this.route.snapshot.paramMap.get('number');
    this.getdata1();

  }
  private getdata1() {

    this.dataService.getdata().subscribe(data => {
      this.post = data;
      const countryCode = this.number;
      for (let i = 0; i < this.post.length; i++) {
        if (this.post[i].alpha3Code === countryCode) {
          console.log(this.post[i]);
          this.countryDetail = this.post[i];
          this.lan = this.countryDetail.languages;
        }
      }
      this.bod = this.countryDetail.borders;
      const border = this.countryDetail.borders;
      this.br = this.post.filter(function(a) {
        return border.indexOf(a.alpha3Code) >= 0;
      });
      /*for (let j = 0; j < this.bod.length; j++) {
        //console.log(this.bod[j], 2222222);
        for (let k = 0; k < this.post .length; k++) {
          if (this.post[k].alpha3Code === this.bod[j]) {
            this.br.push(this.post[k]);
            //console.log(this.br, 8888);
          }
        }
      }*/


    });
  }
  manipulateTime(timezone) {
    const timez = timezone.replace('UTC','').replace(':','.');
    const intTimeZone = parseInt(timez.toString());
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const newCalTime = utc + (3600000 * intTimeZone);
    return new Date(newCalTime).toLocaleTimeString();
  }

}
