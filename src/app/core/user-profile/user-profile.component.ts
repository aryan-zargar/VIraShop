import { OnInit, ChangeDetectionStrategy, Component, inject,model,signal } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ProductService } from '../../services/Product/product.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
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
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { CommonModule, CurrencyPipe } from '@angular/common';
import Swal from 'sweetalert2';
export interface DialogData {
  password  : string;
  confirmationPassword:string;
} 
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [SidebarComponent,MatDialogModule ,MatButtonModule,MatInputModule ,FormsModule,CommonModule,SweetAlert2Module],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserProfileComponent implements OnInit {
  public password = signal('');
  public confirmationPassword = signal('');

  readonly dialog = inject(MatDialog);
  openDialog(): void {
    const dialogRef = this.dialog.open(PasswordChangingDialog, {
      data: { password: this.password(),confirmationPassword:this.confirmationPassword()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      if (result !== undefined) {
        this.password.set(result);
      }
    });
  }
  
  public productList:any;
  public _service:any;
  public Loading:boolean=true;
  constructor(private productService : ProductService){
    this._service = productService;
  }
  ngOnInit(): void {
    this.productList = this._service.get()
    console.log(this.productList)
    if(this.productList != null){
      this.Loading= false
    }
  }

  public redirectToProductDetail(id:any){
    window.location.pathname = `product/${id}`
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'change-password-dialog.html',
  standalone: true,
  imports: [MatDialogModule,SidebarComponent,MatButtonModule,MatInputModule,FormsModule,CommonModule,SweetAlert2Module],
})
export class PasswordChangingDialog {
  public password=""
  public confirmationPassword=""
  public currentPassword=""

  public setCurrentPassword(target:any){
    this.currentPassword = target.value
    console.log(this.currentPassword)
  }
  public setPassword(target:any){
    this.password = target.value
    console.log(this.password)
    
  }
  public setConfirmationPassword(target:any){
    this.confirmationPassword = target.value
    console.log(this.confirmationPassword)
  }
  public checkPassword(){
    console.log(this.currentPassword)
    console.log(this.password)
    console.log(this.confirmationPassword)
    console.log(this.password==this.confirmationPassword)
    if(this.currentPassword == "1234"){
       if(this.password.trim()==''){
        Swal.fire({
          icon: "error",
          title: " خطا در رمز جدید",
          text: "رمز عبور را پر کنید  ",
  
        });
      }
      else if(this.confirmationPassword.trim()==''){
        Swal.fire({
          icon: "error",
          title: " خطا در رمز جدید",
          text: " تکرار رمز عبور را پر کنید  ",
  
        });
      }
      else if((this.password.trim() != this.confirmationPassword.trim())){
        Swal.fire({
          icon: "error",
          title: " خطا در رمز جدید",
          text: "رمز عبور ها مطابقت ندارند",
  
        });
      }
      else{
        Swal.fire({
          title: "",
          text: "😀رمز عبور با موفقیا تغییر یافت",
          icon: "success"
        });
      }
      
    }
    else{
      Swal.fire({
        icon: "error",
        title: " خطا",
        text: "رمز عبور صحیح نمیباشد",

      });
    }
  }
}


