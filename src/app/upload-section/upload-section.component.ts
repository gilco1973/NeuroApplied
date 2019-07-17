import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload-section',
  templateUrl: './upload-section.component.html',
  styleUrls: ['./upload-section.component.scss']
})
export class UploadSectionComponent implements OnInit {
  @Input() isCompeting;
  @Output() setBrandPath = new EventEmitter<string>();
  path: string;
  constructor() { }

  ngOnInit() {
  }
  readURL(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e: any) => {
          this.path =  e.target.result;
        };

        reader.readAsDataURL(file);
    }
}
  upload(){
    this.setBrandPath.emit(this.path);
  }
}
