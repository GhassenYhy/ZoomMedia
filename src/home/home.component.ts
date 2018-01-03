import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
import {VideoService} from '../_services/video.service';
import {ProgressHttp} from 'angular-progress-http';
import {Http, RequestOptions, Headers, Response} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})


export class HomeComponent implements OnInit {
  private userImg = require('../app/demo_img/user-1.png');
  private logo2 = require('../app/img/logo.png');
  private progress;
  model: any = {};
  private filelist: FileList;

  constructor(private router: Router, private authenticationService: AuthenticationService, private videoService: VideoService, private http: ProgressHttp) {
  }

  ngOnInit(): void {
    this.progress = 0;
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  upload() {
    console.log('clicked');
    if (this.filelist.length > 0) {
      console.log('passed!');
      const file: File = this.filelist[0];
      const formData: FormData = new FormData();
      formData.append('file', file)
      const headers = new Headers({'token': sessionStorage.getItem('token')});
      const options = new RequestOptions({headers: headers});
      this.http
        .withUploadProgressListener(progress => {
          this.progress = progress.percentage;
        })
        .withDownloadProgressListener(progress => {
          console.log('Downloading ${progress.percentage}%');
        })
        .post('http://95.85.29.229/api/v1/uploadvideo', formData, options)
        .subscribe((response) => {
          this.progress = 0;
          this.router.navigateByUrl('/loading', {skipLocationChange: true}).then(() => this.router.navigate(['/home/media']));

        });
    }
  }

  fileChange(event) {
    this.filelist = event.target.files;
    console.log(this.filelist);
  }
}
