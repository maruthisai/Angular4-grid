import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';


import { CHARACTERS } from './mock-data';

@Injectable()
export class AdventureTimeService {

  constructor(private http: Http) { }

  getCharacters(): Observable<any[]>{
     return Observable.of(CHARACTERS).delay(100);
  }

  getColumns():any{
    return [
"id",
"author",
"title",
"type",
"logline",
"description",
"year",
"addedDate",
"isLiveStream",
"durationMinutes",
"durationSeconds",
"runtime",
"primaryCategory",
"secondaryCategories",
"tags",
"channels",
"images",
"credits",
"permalink",
"imdbId",
"parentalRating",
"geoRestrictions",
"relatedFilms",
"renditions",
"audioRenditions",
"fbCommentsUrl",
"starRatingAvg",
"starRatingCount",
"publishTime",
"isQueued",
"isSmoothAsset",
"isCompleted",
"playable",
"errorMessage",
"ccFileUrl",
"ageRestricted",
"hds",
"ads",
"manifest",
"mast",
"time",
"percentage",
"views",
"comments",
"shares",
"notes",
"status",
"syndicationPartner",
"bumperUrl",
"embed",
"huluId",
"seasons",
"episode",
"episodeNumber",
"seasonNumber",
"season",
"isFree",
"scheduling",
"disable_live_player",
"professors",
"yTVideoId",
"fBVideoId",
"rating",
"creditBlocks",
"kisweEventId",
"hd",
"free",
"player_tags",
"featured_tag",
"viewer_grade",
"your_grade",
"film_type",
"trailer_url",
"start_time",
"end_time",
"clip_url",
"mp4_url",
"hls_url",
"dfp_tag",
"content_type",
"no_of_seasons",
"closed_captions",
"show_title",
"show_id",
"related_courses",
"social_widgets",
"external_link",
"no_of_episodes"]
  }

}
