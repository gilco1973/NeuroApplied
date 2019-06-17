import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ErrorMessageService } from './error-message.service';
import { tap } from 'rxjs/internal/operators/tap';
import { MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(public snackbar: MatSnackBar, private loaderService: NgxSpinnerService,
    private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    return next.handle(request).pipe(tap((x: any) => {
      if (x && x.status) {
        this.loaderService.hide();
      }
    }, (err: any) => {
      this.loaderService.hide();
      if (err instanceof HttpErrorResponse) {
        // do error handling here

        this.snackbar.open(err.error.message || 'Server Error', 'close');
      }
      setTimeout(() => {
        this.snackbar.dismiss();
      }, 5000);

    }));
  }
}
