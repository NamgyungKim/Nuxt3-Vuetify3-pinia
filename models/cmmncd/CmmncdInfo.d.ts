export interface CmmncdInfo {
  totalItems: number;
  res_msg: string;
  cmmncdList?: CmmncdList;
  totalPages: number;
  res_code: string;
}
export interface CmmncdList {
  content?: (ContentEntity)[] | null;
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  numberOfElements: number;
  first: boolean;
  number: number;
  size: number;
  sort: Sort;
  empty: boolean;
}
export interface ContentEntity {
  note: string;
  up_dt?: string | null;
  reg_dt: string;
  cmmncd_nm: string;
  use_yn: string;
  up_id?: string | null;
  cmmncd_id: string;
  sort_order: number;
  reg_id: string;
}
export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  unpaged: boolean;
  paged: boolean;
}
export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
