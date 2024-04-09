// Core

import { Pipe, PipeTransform } from '@angular/core';

// Local

import { StaffService } from '../services/staff.service';

@Pipe({
  name: 'staffName'
})
export class StaffNamePipe implements PipeTransform {

  constructor(private _staffService: StaffService) {}

  async transform(id: string): Promise<string> {
    const ownerName = await this._staffService.getStaffFromId(id);
    return ownerName.name;
  }

}
