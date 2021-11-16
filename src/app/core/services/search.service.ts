import { Injectable } from '@angular/core';

import { SearchInfo } from '../models/base';
import { AgeLimit, LookingFor } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchKey: SearchInfo = {
    lookingFor: LookingFor.MAN,
    startAge: AgeLimit.START,
    endAge: AgeLimit.END,
    location: '',
    ignoreFlag: true
  };
  constructor() {}

  setSearchKey(item: SearchInfo): void {
    this.searchKey = item;
  }

  setIgnoreFlag(flagItem: boolean): void {
    this.searchKey.ignoreFlag = flagItem;
  }
}
