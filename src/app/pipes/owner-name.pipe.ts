import { Pipe, PipeTransform } from '@angular/core';

// Local

import { OwnersService } from '../services/owners.service';

@Pipe({
  name: 'ownerName'
})
export class OwnerNamePipe implements PipeTransform {

  constructor(private _ownerService: OwnersService) {}

  async transform(id: string): Promise<string> {
    const ownerName = await this._ownerService.getOwnerFromId(id);
    return ownerName.name;
  }
}
