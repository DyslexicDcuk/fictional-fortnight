import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  template: `
    app works!<br><br>
    <button type="button" (click)="getData()">GET</button>
    <button type="button" (click)="create()">POST</button>
    <button type="button" (click)="update()">UPDATE</button>
  `
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    console.info('Getting Data...');
    this.apiService.find().subscribe(
      (res) => {
        console.debug('Success!');
        console.log(res);
      }, (err) => {
        console.error(err);
      }
    );
  }

  create() {
    const newLink = {
      title: `New Title - ${(new Date()).getTime()}`,
      url: `http://www.${(new Date()).getTime()}.com`
    }

    console.info('Creating...');
    this.apiService.create(newLink).subscribe(
      (res) => {
        console.debug('Success!');
        console.log(res);
      }, (err) => {
        console.error(err);
      }
    )
  }

  update() {
    const newFirstLink = {
      id: 1,
      title: `New Digihey - ${(new Date()).getTime()}`,
      url: `http://www.digihey.com/${(new Date()).getTime()}`
    }

    console.info('Updating...');
    this.apiService.update(0, newFirstLink).subscribe(
      (res) => {
        console.debug('Success!');
        console.log(res);
      }, (err) => {
        console.error(err);
      }
    )
  }
}
