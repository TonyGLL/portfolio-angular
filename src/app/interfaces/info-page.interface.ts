
export interface InfoPage {
  title?: string;
  email?: string;
  short_name?: string;
  author_page?: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
  codersRank?: string;
  work_team?: any[];
}

export interface IGetTeamResponse {
  color: string;
  name: string;
  sentence: string;
  subtitle: string;
  twitter: string;
  url: string;
}
