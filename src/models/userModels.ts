import { Optional } from "../utils/typeUtils";

export interface UserModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressModel;
  phone: string;
  website: string;
  company: CompanyModel;
}

export type UserLoginData = Pick<UserModel, "username" | "email" | "id" | "name">;

export interface AddressModel {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoModel;
}

export interface GeoModel {
  lat: string;
  lng: string;
}

export interface CompanyModel {
  name: string;
  catchPhrase: string;
  bs: string;
}

export type UserCreateModel = Optional<Omit<UserModel, "id">, "address" | "company">;
