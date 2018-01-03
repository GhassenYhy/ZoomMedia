import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {VideoService} from '../_services/video.service';
import {Video} from '../_models/Video';

@Component({
  selector: 'app-media',
  templateUrl: 'media.component.html'
})
export class MediaComponent implements OnInit {

  videos: Video[] = [];

  constructor(private router: Router, private videoService: VideoService) {
  }

  ngOnInit(): void {
    this.loadAllVideos();
  }

  redirect(id: string) {
    this.router.navigate(['/home/media/' + id]);
  }

  loadAllVideos() {
    this.videoService.getAll().subscribe(videos => {
      this.videos = videos;
    });
  }
}
