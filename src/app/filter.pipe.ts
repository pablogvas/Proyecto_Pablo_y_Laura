import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './model';

@Pipe({
  name: 'filter',
  pure: false,
})

export class FilterPipe implements PipeTransform {
  transform(value: Product[], filterString: string): Product[] {
    if (value.length === 0 || !filterString) {
      return value;
    }
    let filteredUsers: Product[] = [];
    for (let product of value) {
       if (product['name'].toLowerCase().includes(filterString.toLowerCase())) {
        filteredUsers.push(product);
      }
    }
    return filteredUsers;
  }
}

