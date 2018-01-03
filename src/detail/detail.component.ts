import {Component, OnInit, ElementRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Video} from '../_models/Video';
import {VideoService} from '../_services/video.service';
import {MyPlayerService} from '../_services/myPlayer.service';
import {AuthenticationService} from '../_services/authentication.service'

@Component({
  selector: 'app-detail',
  templateUrl: 'detail.component.html'
})
export class DetailComponent implements OnInit {
  private userImg2 = require('../app/demo_img/user-1.png');
  video: Video;
  myPlayer;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private videoService: VideoService,
              private myPlayerService: MyPlayerService,
              private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getVideo();
  }

  editTr(): void {
    console.log("ddddddddd");
    this.videoService.transcript(this.video.Transcript, this.video._id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  getVideo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('aa=' + id);
    this.videoService.getById(id).subscribe(video => {
      this.video = video;
      if (!!this.myPlayerService.myPlayer) {
        this.myPlayerService.myPlayer.dispose();
      }
      this.myPlayerService.myPlayer = amp('vid1', {
          /* Options */
          'nativeControlsForTouch': false,
          autoplay: false,
          controls: true,
          width: '780',
          height: '460',
          poster: ''
        }, function () {
          console.log('Good to go!');
          // add an event listener
          this.addEventListener('ended', function () {
            console.log('Finished!');
          });
        }
      );
      this.myPlayerService.myPlayer.src([{
        src: 'http://95.85.29.229' + this.video.VideoUrl,
        type: 'video/mp4'
      }]);
    });
  }

}
