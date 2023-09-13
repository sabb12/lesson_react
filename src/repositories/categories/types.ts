export type CategoryResponse = {
  id: number;
  name: string;
  depth: number;
  parentId: number;
};

export type GetListParam = {
  depth?: number;
  parentId?: number;
};

export type Category = CategoryResponse;
