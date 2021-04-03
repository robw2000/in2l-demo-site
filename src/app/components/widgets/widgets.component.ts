import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Widget} from '../../models/widget';
import {DatabaseApiService} from '../../services/database-api.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'price', 'availableStock'];
  widgets: Widget[];
  widgetNameInput = '';
  filtered;
  @ViewChild('input') input: ElementRef;

  constructor(
    private service: DatabaseApiService
  ) { }


  ngOnInit(): void {
    // Filtered is used to display Display All button
    this.filtered = false;
    this.service.getWidgets().subscribe(widgets => {
      this.widgets = widgets || [];
    });
  }

  // Give focus to input and reset form
  ngAfterViewInit() {
    this.widgetNameInput = '';
    this.input.nativeElement.focus();
  }

  filter(): void {
    // Don't want to trigger just any call
    if (this.widgetNameInput.trim() !== '') {
      this.filtered = true;
      this.widgets = [];
      this.service.getWidgets(this.widgetNameInput).subscribe(widget => {
        this.widgets = widget || [];
      });
    }

    this.ngAfterViewInit();
  }

}
