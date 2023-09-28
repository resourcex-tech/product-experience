export default interface Model {
    model_id: string;
    model_number: string;
    manufucture_name: string;
    category_name: string;
    model_stock_photo: string;
  }

  export interface Part{
    id: string;
    part_name: string;
    part_number: string;
    manufacture_name: string;
  }

  export interface Asset{
    id: number;
    type: string;
    url: string;
    description: string;
  }