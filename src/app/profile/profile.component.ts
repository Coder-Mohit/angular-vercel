import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-profile',
    // template:`<h1>Profile C</h1>`,
    // styles:'h1{color:orange}',
    templateUrl:'./profile.component.html',
    // styleUrl:'./profile.component.css'
    styleUrls:['./profile.component.css','./profile.btn.css']
})

export class profileComponent{
    userName:null|string = '';
    constructor(private route:ActivatedRoute){}
    ngOnInit(){
        // this.userName=this.route.snapshot.paramMap.get('name');
        // console.log(this.userName);

        // this.route.queryParams.subscribe(params=>{
        //     this.userName=params['name'];
        // })

        this.route.data.subscribe(data=>{
             console.log(data);
             this.userName=data['name']
        })
    }
}