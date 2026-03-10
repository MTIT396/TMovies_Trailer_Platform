export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  cast_id: number;
  credit_id: string;
  order: number;
}

export interface Crew {
  id: number;
  name: string;
  department: string;
  job: string;
  profile_path: string | null;
}
