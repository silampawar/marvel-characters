export interface ICharacterDataWrapper {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    data: ICharacterDataContainer;
    etag: string;
  }
  
  export interface ICharacterDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Character[];
  }
  
  export interface ICharacter {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: IUrl[];
    thumbnail: IImage;
    comics: IComicList;
    stories: IStoryList;
    events: IEventList;
    series: ISeriesList;
  }
  
  export interface ICharacterInput {
    data:ICharacter
  }
  export interface IUrl {
    type: string;
    url: string;
  }
  export interface IImage {
    path: string;
    extension: string;
  }
  export interface IComicList {
    available: number;
    returned: number;
    collectionURI: string;
    items: unknown[];
  }
  
  export interface IStoryList {
    available: number;
    returned: number;
    collectionURI: string;
    items: unknown[];
  }
  
  export interface IEventList {
    available: number;
    returned: number;
    collectionURI: string;
    items: unknown[];
  }
  
  export interface ISeriesList {
    available: number;
    returned: number;
    collectionURI: string;
    items: unknown[];
  }
  