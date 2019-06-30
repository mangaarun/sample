import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../providers/auth-service.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.page.html',
  styleUrls: ['./asset-list.page.scss'],
})
export class AssetListPage implements OnInit {

  asset_list = [{
    asset_detail:"adf",
    asset_number: "123",
    part_number:"1234334",
    engine_type:"asfsdfa",
    engine_number:"1233",
    asset_type:"asfasdfa",
    asset_status:"status",
    asset_condition:"condition"
  },
  {
    asset_detail:"adf",
    asset_number: "1234",
    part_number:"1234334",
    engine_type:"asfsdfa",
    engine_number:"1233",
    asset_type:"asfasdfa",
    asset_status:"status",
    asset_condition:"condition"
  }];
  constructor(private auth:AuthServiceService) { }

  ngOnInit() {
  }

  deleteAsset(index){
    console.log(index);
    console.log(this.asset_list[index]);
    let asset = this.asset_list[index];
    this.auth.deleteAsset(asset).subscribe(
      data => {
        console.log(data);
      },
      err =>{
        console.log(err);
      }
    );
  }
  
  editAsset(index){
    
  }

}
