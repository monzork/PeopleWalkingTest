import { IRequest } from "src/app/shared/interface/irequest";

export interface IPeopleResult {
  name: string;
  height: number;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
  heightValue: string
}

export interface IPeople extends IRequest {
  results: IPeopleResult[];
}

