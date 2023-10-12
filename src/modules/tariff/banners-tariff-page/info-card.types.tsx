export interface infoType {
  id: number;
  title: string;
  desc: string;
  params: paramsTypes[];
  price: string;
}

export interface paramsTypes {
  id: number,
  desc: string,
  price: any,
  icon: any
}
