export interface DataType {
  data: Data[];
  meta: Meta;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Review {
  id: number;
  attributes: {
    reviewer: string;
    description: string;
  };
}

export interface Attributes {
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  reviews: {
    data: Review[];
  };
}
