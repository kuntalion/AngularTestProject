import { Component, OnInit  } from '@angular/core';
import { Car, cars } from './data-table-demo-data';

@Component({
  selector: 'data-table-demo',
  templateUrl: './data-table-demo.html'
})
export class DataTableDemoComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
    cars: Car[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.dtOptions = {
          pagingType: 'full_numbers'
        };
        this.cars = cars;
        // this.http.get('data/data.json')
        //   .map(this.extractData)
        //   .subscribe(persons => {
        //     this.persons = persons;
        //     // Calling the DT trigger to manually render the table
        //     this.dtTrigger.next();
        //   });
      }

    // custom features:

    carClicked(car) {
        alert(car.model);
    }
}