import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-country-item',
  templateUrl: './country-item.component.html',
  styleUrls: ['./country-item.component.css']
})
export class CountryItemComponent implements OnInit {
  @Input()  item;
  constructor() { }

  ngOnInit() {
  }
  manipulateTime(timezone) {
    const timez = timezone.replace('UTC','').replace(':','.');
    const intTimeZone = parseInt(timez.toString());
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
    const newCalTime = utc + (3600000 * intTimeZone);
    return new Date(newCalTime).toLocaleDateString() + ' : ' + new Date(newCalTime).toLocaleTimeString();
  }
}
