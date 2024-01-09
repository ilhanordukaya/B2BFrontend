import { Component, OnInit } from '@angular/core';
import { PriceListService } from './service/price-list.service';
import { ErrorService } from 'src/app/services/error.service';
import { ToastrService } from 'ngx-toastr';
import { HelperService } from 'src/app/services/helper.service';
import { PriceListModel } from './model/price-list-model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-price-lists',
  templateUrl: './price-lists.component.html',
  styleUrls: ['./price-lists.component.scss']
})
export class PriceListsComponent implements OnInit {

  priceLists: PriceListModel[] = [];
  priceList: PriceListModel = new PriceListModel();

  filterText: string = "";

  constructor(
    private priceListService: PriceListService,
    private errorService: ErrorService,
    private toastr: ToastrService,
    private helperService: HelperService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  exportExcel(){
    let element = document.getElementById("excel-table");
    let title = "Fiyat Listeleri";
    this.helperService.exportExcel(element,title);
  }

  getList(){
    this.priceListService.getList().subscribe((res: any)=>{
      this.priceLists = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  delete(priceList: PriceListModel){
    this.priceListService.delete(priceList).subscribe((res: any)=>{
      this.toastr.info(res.message)
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  add(addForm: NgForm){
    let priceListModel: PriceListModel = new PriceListModel();
    priceListModel.name = addForm.value.priceListName;
    priceListModel.id = 0;

    this.priceListService.add(priceListModel).subscribe((res: any)=>{
      this.toastr.success(res.message);
      this.getList();
      addForm.reset();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }


  getPriceList(priceList: PriceListModel){
    this.priceListService.getById(priceList.id).subscribe((res: any)=>{
      this.priceList = res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }

  update(){
    this.priceListService.update(this.priceList).subscribe((res: any)=>{
      this.toastr.success(res.message);
      this.getList();
      document.getElementById("updateModelCloseBtn").click();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }
}
