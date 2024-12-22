export type ResponseData<D> = {
  data: D[] | D;
  message: string;
  status: number;
};
