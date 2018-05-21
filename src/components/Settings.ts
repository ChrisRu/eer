export interface IEntity {
  pos: [number, number];
  header: string;
  content: string[];
}

export interface IView {
  zoom: number;
  pos: {
    x: number;
    y: number;
  };
}

export interface IGrid {
  visible: boolean;
  size: number;
}

export class Field {
  view: IView = {
    zoom: 1,
    pos: {
      x: 0,
      y: 0
    }
  };
  grid: IGrid = {
    visible: true,
    size: 20
  };
  entities: IEntity[] = [
    {
      pos: [50, 100],
      header: 'Tabletest',
      content: ['hmmm', 'dude']
    },
    {
      pos: [500, 500],
      header: 'Test 2',
      content: ['hahahah', 'dude', 'thats perfect', 'wow']
    }
  ];
}

export default class Settings {
  modals: {
    export: boolean;
  } = {
    export: false
  };

  field: Field = new Field();
}
