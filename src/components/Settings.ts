export interface IEntity {
  pos: [number, number];
  header: string;
  content: string[];
}

export interface IField {
  grid: {
    visible: boolean;
    size: number;
  };

  entities: IEntity[];
}

export default class Settings {
  modals: {
    [x: string]: boolean;
  } = {};
  field: IField = {
    grid: {
      visible: true,
      size: 20
    },
    entities: [
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
    ]
  };
}
