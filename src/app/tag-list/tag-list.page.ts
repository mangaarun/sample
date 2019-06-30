import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../providers/auth-service.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.page.html',
  styleUrls: ['./tag-list.page.scss'],
})
export class TagListPage implements OnInit {

  tag_list = [{
    tagid: "1234",
    asset: "12345",
    battery_id:"123456"
  },
  {
    tagid: "1234",
    asset: "12345",
    battery_id:"123456"
  }];
  constructor(private auth:AuthServiceService) { }


  ngOnInit() {
  }

  
  deleteTag(index){
    console.log(index);
    console.log(this.tag_list[index]);
    let asset = this.tag_list[index];
    this.auth.deleteTag(asset).subscribe(
      data => {
        console.log(data);
      },
      err =>{
        console.log(err);
      }
    );
  }

  editTag(){
    
  }
}
