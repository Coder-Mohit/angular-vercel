import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  imports: [FormsModule,CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  constructor(
    private productService: ProductService,
    private userService: UsersService
  ) {}
  products:
    | {
        name: string;
        brand: string;
        price: string;
      }[]
    | undefined;
  getProductData() {
    this.products = this.productService.getProductData();
  }
  productList: any;
  users: User[] = [];
  ngOnInit() {
    this.productService.getProductList().subscribe({
      next: (data: any) => {
        this.productList = data.products;
      },
      error: (err) => {
        console.log(err.message);
      },
      complete: () => {
        console.log('request completed');
      },
    });
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
  selectedUser: User | undefined;

  addUser(user: User) {
    if(!this.selectedUser){
      this.userService.addUser(user).subscribe((data: User) => {
        // console.log(data);
        this.getUsers();
      });
    }
    else{      
      this.userService.updateUser(this.selectedUser).subscribe(
        updatedUser => {
          console.log('Updated user:', updatedUser);
          // Maybe refresh data here
        },
        error => {
          console.error('Update failed:', error);
        }
      );
      
    }
  }

  deleteUser(userId: string) {
    this.userService.deleteUser(userId).subscribe((data: User) => {
      console.log(data);
      this.getUsers();
    });
  }


  selectUser(userId: string) {
    this.userService.getSelectedUser(userId).subscribe((data: User) => {
      // console.log(data);
      this.selectedUser = {...data,id:userId};
      console.log("selected user ",this.selectedUser);
      
    });
  }

}
