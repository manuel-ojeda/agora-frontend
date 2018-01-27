import { Component, OnInit } from '@angular/core';
import { B2cprofileService } from '../_services/b2cprofile.service';

@Component({
  selector: 'app-b2cprofile',
  templateUrl: './b2cprofile.component.html',
  styleUrls: ['./b2cprofile.component.css']
})
export class B2cprofileComponent implements OnInit {

  b2cProfiles: B2cprofile[];

  constructor(
    private b2cProfileService: B2cprofileService
  ) {
  }

  ngOnInit() {
    this.b2cProfileService.getb2cProfiles().subscribe(
      b2cProfiles => {
        this.b2cProfiles = b2cProfiles;
      },
      error => {}
    );
  }

}
