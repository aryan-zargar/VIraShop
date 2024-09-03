import { OnInit, ChangeDetectionStrategy, Component, inject, model, signal, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ProductService } from '../../services/Product/product.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import * as UC from "@uploadcare/file-uploader";
import "@uploadcare/file-uploader/web/uc-file-uploader-minimal.min.css"

UC.defineComponents(UC);
// import {MatDialog, MatDialogModule,MAT_DIALOG_DATA,} from '@angular/material/dialog';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MatDialogModule
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';
import { UserService } from '../../services/User/user.service';
import { CoreModule } from '../core.module';
export interface DialogData {
  UserPassword: string;
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [SidebarComponent, MatDialogModule, MatButtonModule, MatInputModule, FormsModule, CommonModule, SweetAlert2Module],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})

export class UserProfileComponent implements OnInit {
  public Imagefile: any;
  public ImageUrl: any;
  public FileName:string;
  public FileSize:number;
  public name: string = "";
  public surname: string = "";
  public phoneNumber: string = "";
  public email: string = "";
  public nationalId: string = "";
  public genderDtoId: number = 0;
  public userCode: string = "";
  public userPassword: string = "";
  public userPasswordSignal = signal("")
  readonly dialog = inject(MatDialog);
  public userData: any;
  public Loading: boolean = true;
  constructor(public userService: UserService,private DetectionRef :ChangeDetectorRef) {}
  ngOnInit(): void {
    this.userData = this.userService.getUserById(1)
    this.name = this.userData.name
    this.surname = this.userData.surname
    this.email = this.userData.email
    this.phoneNumber = this.userData.phoneNumber
    this.nationalId = this.userData.nationalCode
    this.userCode = this.userData.UserCode
    this.userPassword = this.userData.password
    this.userPasswordSignal.set(this.userData.Password)
    this.genderDtoId = 1
    if (this.userData != null) {
      this.Loading = false
    }
    this.DetectionRef.detectChanges()
  }

  openDialog(): void {
    this.dialog.open(PasswordChangingDialog, { width:'100px' , data: { UserPassword: this.userPasswordSignal() } });
  }
  public redirectToProductDetail(id: any) {
    window.location.pathname = `product/${id}`
  }
  public formatNumberWithCommas(x: number) {
    return `${x}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  
  public setComponentsPreviewImageUrl(){
    this.ImageUrl
  }

  public onFileSelected(event: any,PreviewImageUrl:any) {
    var file: any = {};
    file = event.target.files[0];
    this.Imagefile = event.target.files[0]  ;
    this.FileName = this.Imagefile.name
    this.FileSize = this.Imagefile.size
    const preview: any = document.getElementById('ImagePreview')!;
    const reader = new FileReader();
    reader.addEventListener("loadend", ()=> {
      console.log(reader.result);
      this.ImageUrl = reader.result;
      preview.src = reader.result
      preview.style.display = 'block'
    }, false);
    if (file) {
      reader.readAsDataURL(file);
      setTimeout(() => {
        console.log(this.ImageUrl)
      }, 200);
    }
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'change-password-dialog.html',
  standalone: true,
  imports: [MatDialogModule, SidebarComponent, MatButtonModule, MatInputModule, FormsModule, CommonModule, SweetAlert2Module],
})
export class PasswordChangingDialog {
  public password = ""
  readonly dialogRef = inject(MatDialogRef<PasswordChangingDialog>);
  public confirmationPassword = ""
  public currentPassword = ""
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly CorrectPassword = model(this.data.UserPassword);

  public setCurrentPassword(target: any) {
    this.currentPassword = target.value
    console.log(this.currentPassword)
  }
  public setPassword(target: any) {
    this.password = target.value
    console.log(this.password)
  }
  public setConfirmationPassword(target: any) {
    this.confirmationPassword = target.value
    console.log(this.confirmationPassword)
  }
  public checkPassword() {
    var PasswordForChecking = (this.CorrectPassword.toString().split(' ')[2].replace("]", "").trim())
    if (this.currentPassword == PasswordForChecking) {
      if (this.password.trim() == '') {
        Swal.fire({
          icon: "error",
          title: " خطا در رمز جدید",
          text: "رمز عبور را پر کنید  ",

        });
      }
      else if (this.confirmationPassword.trim() == '') {
        Swal.fire({
          icon: "error",
          title: " خطا در رمز جدید",
          text: " تکرار رمز عبور را پر کنید  ",

        });
      }
      else if ((this.password.trim() != this.confirmationPassword.trim())) {
        Swal.fire({
          icon: "error",
          title: " خطا در رمز جدید",
          text: "رمز عبور ها مطابقت ندارند",

        });
      }
      else {
        Swal.fire({
          title: "",
          text: "😀رمز عبور با موفقیت تغییر یافت",
          icon: "success"
        });
      }

    }
    else {
      Swal.fire({
        icon: "error",
        title: " خطا",
        text: "رمز عبور صحیح نمیباشد",

      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}


