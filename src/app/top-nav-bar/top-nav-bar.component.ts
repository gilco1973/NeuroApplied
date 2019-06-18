import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import Popper from 'popper.js';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopNavBarComponent implements OnInit, AfterViewInit {
  public showProfileNavBar;
  public showLinksNavBar;
  private popper: Popper;
  @Input() public numOfStatusUpdates: any;
  isWaitingActive = false;
  isInProgressActive = false;
  isSalaryActive = false;
  isContactActive = false;

  constructor(private route: ActivatedRoute) {

  }
  linkClicked(target) {

    this.resetSelection();
    this.selectActiveLink(target);
  }
  selectActiveLink(segment): any {

    if (segment.toLowerCase().indexOf('waitingoffers') > -1) {
      this.isInProgressActive = false;
      this.isSalaryActive = false;
      this.isContactActive = false;
      this.isWaitingActive = true;
    } else if (segment.toLowerCase().indexOf('offersinprogress') > -1) {
      this.isWaitingActive = false;
      this.isSalaryActive = false;
      this.isContactActive = false;
      this.isInProgressActive = true;
    } else if (segment.toLowerCase().indexOf('salary') > -1) {
      this.isWaitingActive = false;
      this.isInProgressActive = false;
      this.isContactActive = false;
      this.isSalaryActive = true;
    } else if (segment.toLowerCase().indexOf('contactus') > -1) {
      this.isWaitingActive = false;
      this.isInProgressActive = false;
      this.isSalaryActive = false;
      this.isContactActive = true;
    }
  }
  resetSelection(): any {
    this.isWaitingActive = false;
    this.isInProgressActive = false;
    this.isSalaryActive = false;
    this.isContactActive = false;
  }
  ngAfterViewInit() {
    $(window).on('shown.bs.modal', function () {
      $('.modal-backdrop').remove();
    });
    
  }
  ngOnInit() {
    /* $(document).ready(function () {
      $('#nav-modal').on('shown.bs.modal', function () {
        $('.modal-backdrop').remove();
      });
    }); */
    // this.numOfStatusUpdates = 5;
    this.route.url.forEach(element => {
      element.forEach(segment => {
        this.selectActiveLink(segment.path);
      });
    });
  }
}
