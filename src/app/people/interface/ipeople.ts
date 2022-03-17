import { Observable } from "rxjs";
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
  homeworld: any;
  homeworldName: string;
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


export interface IPlanet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}
