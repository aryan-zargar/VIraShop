import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from '../../services/User/user.service';

@Component({
  selector: 'admin-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './admin-panel-sidebar.component.html',
  styleUrl: './admin-panel-sidebar.component.scss',

})
export class AdminPanelSidebarComponent implements OnInit {

  public Imagefile: any;
  public name: string = "";
  public surname: string = "";
  public phoneNumber: string = "";
  public email: string = "";
  public nationalId: string = "";
  public genderDtoId: number = 0;
  public userCode: string = "";
  public userPassword: string = "";
  userData: any;
  public Loading: boolean = true;
  constructor(public userService: UserService, private cdr: ChangeDetectorRef) {
    

  }

  ngOnInit(): void {
      
    this.userData = this.userService.getUserById(1)

    console.log(this.userData)
    this.name = this.userData.name
    this.surname = this.userData.surname
    this.email = this.userData.email
    this.phoneNumber = this.userData.phoneNumber
    this.nationalId = this.userData.nationalCode
    this.userCode = this.userData.UserCode
    this.userPassword = this.userData.password
    this.genderDtoId = 1

    if (this.userData != null) {
      this.Loading = false
    }

    this.cdr.detectChanges();

  }

  public PhoneNumberFormatter(PhoneNumber: string) {
    var _res = [...PhoneNumber]
    _res.splice(4, 0, ' ')
    _res.splice(8, 0, ' ')
    return _res.join('')
  }
}
