import { Component } from '@angular/core';
import { AdminPanelSidebarComponent } from '../admin-panel-sidebar/admin-panel-sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { CompanyDetailService } from '../../services/CompanyDetail/company-detail.service';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [AdminPanelSidebarComponent, MatButtonModule,MatIconModule,FormsModule,MatInputModule,MatFormFieldModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss'
})
export class AdminPanelComponent {
  public CompanyDetail:any;
  constructor(private service: CompanyDetailService) {
      this.CompanyDetail = service.getCompanyDetail();
      this.CompanyName = this.CompanyDetail.CompanyName
      this.FirstPageImageUrl = this.CompanyDetail.FirsPageImage
      this.CompanyImageUrl = this.CompanyDetail.CompanyImage
      this.BackgroundImageUrl = this.CompanyDetail.BackgroundImage

  }  
  public CompanyName:any;
  public CompanyImagefile: any;
  public CompanyFileName: any;
  public CompanyFileSize: any;
  public CompanyImageUrl: any;
  public CompanyOnFileSelected(event: any, PreviewImageUrl: any) {
    var file: any = {};
    file = event.target.files[0];
    this.CompanyImagefile = event.target.files[0];
    this.CompanyFileName = this.CompanyImagefile.name
    this.CompanyFileSize = this.CompanyImagefile.size
    const preview: any = document.getElementById('ImagePreviewC')!;
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      console.log(reader.result);
      this.CompanyImageUrl = reader.result.toString().split('data:image/png;base64,')[1];
      preview.src = reader.result
      preview.style.display = 'block'
    }, false);
    if (file) {
      reader.readAsDataURL(file);
      setTimeout(() => {
        console.log(this.CompanyImageUrl.split('data:image/png;base64,')[1])
      }, 200);
    }
  }
  public FirstPageImagefile: any;
  public FirstPageFileName: any;
  public FirstPageFileSize: any;
  public FirstPageImageUrl: any;
  public FirstPageOnFileSelected(event: any, PreviewImageUrl: any) {
    var file: any = {};
    file = event.target.files[0];
    this.FirstPageImagefile = event.target.files[0];
    this.FirstPageFileName = this.FirstPageImagefile.name
    this.FirstPageFileSize = this.FirstPageImagefile.size
    const preview: any = document.getElementById('ImagePreviewF')!;
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      console.log(reader.result);
      this.FirstPageImageUrl = reader.result.toString().split('data:image/png;base64,')[1];
      preview.src = reader.result
      preview.style.display = 'block'
    }, false);
    if (file) {
      reader.readAsDataURL(file);
      setTimeout(() => {
        console.log(this.FirstPageImageUrl.split('data:image/png;base64,')[1])
      }, 200);
    }
  }
  public BackgroundImagefile: any;
  public BackgroundFileName: any;
  public BackgroundFileSize: any;
  public BackgroundImageUrl: any;
  public BackgroundOnFileSelected(event: any, PreviewImageUrl: any) {
    var file: any = {};
    file = event.target.files[0];
    this.BackgroundImagefile = event.target.files[0];
    this.BackgroundFileName = this.BackgroundImagefile.name
    this.BackgroundFileSize = this.BackgroundImagefile.size
    const preview: any = document.getElementById('ImagePreviewB')!;
    const reader = new FileReader();
    reader.addEventListener("loadend", () => {
      console.log(reader.result);
      this.BackgroundImageUrl = reader.result.toString().split('data:image/png;base64,')[1];
      preview.src = reader.result
      preview.style.display = 'block'
    }, false);
    if (file) {
      reader.readAsDataURL(file);
      setTimeout(() => {
        console.log(this.BackgroundImageUrl.split('data:image/png;base64,')[1])
      }, 200);
    }
  }
  public formatNumberWithCommas(x: number) {
    return `${x}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  public postChanges() {
    if (this.CompanyImageUrl && this.FirstPageImageUrl && this.BackgroundImageUrl&&window.confirm('آیا به اعمال تغییرات اطمیمان دارید؟')) {
      var data = {
        id: 1,
        CompanyName: this.CompanyName,
        CompanyImage: this.CompanyImageUrl,
        FirsPageImage: this.FirstPageImageUrl,
        BackgroundImage: this.BackgroundImageUrl
      }
      this.service.PutData(data);
      
    }else{
      
    }
  }
}
