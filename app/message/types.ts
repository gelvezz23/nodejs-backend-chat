export interface PropsMessage {
  message: string;
  date: Date;
  user: string;
  chat?: string;
  file?: string;
}
export interface FileProps {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}
