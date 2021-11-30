import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-member-item',
  templateUrl: './list-member-item.component.html',
  styleUrls: ['./list-member-item.component.css']
})
export class ListMemberItemComponent{
	@Input() public name: string = '';
	@Input() public allowance: number = 0;
	@Input() public discounts: number = 0;
	
	public getTotal(): number{
		return this.allowance - this.discounts;
	}
}