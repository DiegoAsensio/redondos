import type { Album, AlbumCategory, Track } from '../types/album';

function tracks(titles: string[], durations?: string[]): Track[] {
  return titles.map((title, i) => ({
    trackNumber: i + 1,
    title,
    ...(durations?.[i] ? { duration: durations[i] } : {}),
  }));
}

export const albums: Album[] = [
  {
    id: 'gulp',
    title: 'Gulp!',
    year: 1985,
    releaseDate: '20 de julio de 1985',
    category: 'estudio',
    cover: 'albums/gulp/cover.jpg',
    position: 1,
    tagline: 'El debut: un disco independiente, pagado con lo que dejaban los shows.',
    description:
      'Primer álbum de estudio de la banda, editado de manera independiente. La producción se financió con dinero obtenido en los propios recitales. Entre sus temas están «La bestia pop», «Superlógico» y «El infierno está encantador esta noche». La presentación oficial fue el 23 de agosto de 1985 en Cemento.',
    tracks: tracks([
      'Barbazul versus el amor letal',
      'La bestia pop',
      'Roto y mal parado',
      'Pierre, el vitricida',
      'Unos pocos peligros sensatos',
      'Yo no me caí del cielo',
      'Te voy a atornillar',
      'Superlógico',
      'Ñam fri frufi fali fru',
      'El infierno está encantador esta noche',
      'Criminal mambo',
    ]),
  },
  {
    id: 'oktubre',
    title: 'Oktubre',
    year: 1986,
    releaseDate: '4 de octubre de 1986',
    category: 'estudio',
    cover: 'albums/oktubre/cover.jpg',
    position: 2,
    tagline: 'Post-punk, new wave y una tapa de Rocambole que ya es ícono.',
    description:
      'Segundo álbum de estudio, grabado en Estudios Panda. Incorpora influencias del post-punk y la new wave de los años ochenta. La tapa es de Ricardo «Rocambole» Cohen. Fue el último disco con Piojo Ávalos, Tito Fargo D’Aviero y Willy Crook. Se presentó el 18 y el 25 de octubre en Paladium.',
    tracks: tracks(
      [
        'Fuegos de octubre',
        'Preso en mi ciudad',
        'Música para pastillas',
        'Semen-Up',
        'Divina TV Führer',
        'Motor psico',
        'Jijiji',
        'Canción para naufragios',
        'Ya nadie va a escuchar tu remera',
      ],
      ['3:42', '4:02', '4:35', '5:22', '3:03', '4:57', '5:25', '6:02', '3:59'],
    ),
  },
  {
    id: 'un-baion-para-el-ojo-idiota',
    title: 'Un baión para el ojo idiota',
    year: 1988,
    releaseDate: '9 de mayo de 1988',
    category: 'estudio',
    cover: 'albums/un-baion-para-el-ojo-idiota/cover.jpg',
    position: 3,
    tagline: 'Primer disco con Dawi y Sidotti, y letras más directas.',
    description:
      'Tercer álbum de estudio, grabado en Estudios Panda en 1987. Es el primero con Sergio Dawi en saxo y Walter Sidotti en batería. Incluye «Masacre en el puticlub», «Todo preso es político» y «Vamos las bandas», y cierra con «Todo un palo», la canción más larga de su discografía.',
    tracks: tracks([
      'Masacre en el puticlub',
      'Noticias de ayer',
      'Aquella solitaria vaca cubana',
      'Todo preso es político',
      'Vencedores vencidos',
      'Vamos las bandas',
      'Ella debe estar tan linda',
      'Todo un palo',
    ]),
  },
  {
    id: 'bang-bang-estas-liquidado',
    title: '¡Bang! ¡Bang!... Estás liquidado',
    year: 1989,
    releaseDate: '7 de octubre de 1989',
    category: 'estudio',
    cover: 'albums/bang-bang-estas-liquidado/cover.jpg',
    position: 4,
    tagline: 'El primero grabado en Del Cielito, con una convocatoria que no paraba de crecer.',
    description:
      'Cuarto álbum de estudio. Fue el primero grabado en los estudios de Del Cielito Records. La presentación oficial se hizo en Satisfaction, durante cuatro noches: 20, 21, 27 y 28 de octubre de 1989. En 2007, Rolling Stone Argentina lo ubicó en el puesto 33 de su lista de los mejores discos del rock nacional.',
    tracks: tracks([
      'Héroe del whisky',
      'Rock para los dientes',
      'La parabellum del buen psicópata',
      'Un pac-man en el Savoy',
      'Nadie es perfecto',
      'Esa estrella era mi lujo',
      'Maldición, va a ser un día hermoso',
      'Ropa sucia',
      'Nuestro amo juega al esclavo',
    ]),
  },
  {
    id: 'la-mosca-y-la-sopa',
    title: 'La mosca y la sopa',
    year: 1991,
    releaseDate: '27 de octubre de 1991',
    category: 'estudio',
    cover: 'albums/la-mosca-y-la-sopa/cover.jpg',
    position: 5,
    tagline: 'Salió después de un período convulsionado: los shows en Obras y el caso Bulacio.',
    description:
      'Quinto álbum de estudio, grabado entre 1990 y 1991 en Del Cielito. Incluye «Toxi-taxi», «Mi perro dinamita» y «Un poco de amor francés». Lito Vitale aportó teclados en «Blues de la artillería».',
    tracks: tracks([
      'Toxi-taxi',
      'Fusilados por la Cruz Roja',
      'Un poco de amor francés',
      'Mi perro dinamita',
      'Blues de la artillería',
      'Tarea fina',
      'El pibe de los astilleros',
      'Nueva Roma',
      'Salando las heridas',
      'Queso ruso',
    ]),
    tracklistNote: '«Tarea fina» figura solo en la edición en CD; no está en el vinilo ni en el casete.',
  },
  {
    id: 'lobo-suelto-cordero-atado-vol-1',
    title: 'Lobo suelto, cordero atado, Vol. 1',
    year: 1993,
    releaseDate: '4 de octubre de 1993',
    category: 'estudio',
    cover: 'albums/lobo-suelto-cordero-atado-vol-1/cover.jpg',
    position: 6,
    tagline: 'Primera mitad del único álbum doble de la banda, con Lupus, el lobo.',
    description:
      'Se publicó junto con Cordero atado como el único álbum doble del grupo. Se grabó entre marzo y julio de 1993 en Del Cielito. Incluye «Rock para el negro Atila» y «Un ángel para tu soledad». El doble se presentó en el estadio de Huracán el 19 y el 20 de noviembre de 1993.',
    tracks: tracks([
      'Invocación',
      'Rock para el negro Atila',
      'Sorpresa de Shangai',
      'Shopping Disco-Zen',
      'Un ángel para tu soledad',
      'Buenas noticias',
      'Susanita',
      'Capricho Magyar',
      'Espejismo',
      'Gran Lady',
      'La hija del fletero',
      'El lobo caído',
      'Sushi',
    ]),
  },
  {
    id: 'lobo-suelto-cordero-atado-vol-2',
    title: 'Lobo suelto, cordero atado, Vol. 2',
    year: 1993,
    releaseDate: '4 de octubre de 1993',
    category: 'estudio',
    cover: 'albums/lobo-suelto-cordero-atado-vol-2/cover.jpg',
    position: 7,
    tagline: 'La contracara del doble, con Rulo, el cordero, como eje.',
    description:
      'Segunda parte del álbum doble de 1993, contracara del Vol. 1. Incluye «Yo, caníbal», «Ladrón de mi cerebro» y «Caña seca y un membrillo». Se presentó junto con el Vol. 1 en el estadio de Huracán, en noviembre de 1993.',
    tracks: tracks([
      'Yo, caníbal',
      'Ladrón de mi cerebro',
      '¡Es hora de levantarse, querido! (¿Dormiste bien?)',
      'Perdiendo el tiempo',
      'Caña seca y un membrillo',
      'Soga de Caín',
      'Lavi-rap',
      'El arte del buen comer',
      '¡¿Lobo estás?!',
      'Botija rapado',
      'San Telmo',
      'Etiqueta negra',
    ]),
  },
  {
    id: 'luzbelito',
    title: 'Luzbelito',
    year: 1996,
    releaseDate: '1 de agosto de 1996',
    category: 'estudio',
    cover: 'albums/luzbelito/cover.jpg',
    position: 8,
    tagline: 'Un disco conceptual sobre un ficticio hijo del demonio.',
    description:
      'Álbum conceptual alrededor de Luzbelito, un ficticio hijo del demonio. La grabación empezó en São Paulo, siguió en Fort Lauderdale y la mezcla se completó en Buenos Aires. «Blues de la libertad» y «Mariposa Pontiac» son regrabaciones de temas del primer demo, de 1982. En 2007, Rolling Stone Argentina lo ubicó en el puesto 88 de los mejores discos del rock nacional.',
    tracks: tracks([
      'Luzbelito y las sirenas',
      '¡Cruz diablo!',
      'Ella baila con todos',
      'Fanfarria del cabrío',
      'Nuotatori professionisti',
      'Blues de la libertad',
      'La dicha no es una cosa alegre',
      '¡Me matan, limón!',
      'Rock yugular',
      'Mariposa Pontiac – Rock del país',
      'Juguetes perdidos',
    ]),
    tracklistNote:
      '«Mariposa Pontiac – Rock del país» figura como un único tema; algunas ediciones lo separan en dos.',
  },
  {
    id: 'ultimo-bondi-a-finisterre',
    title: 'Último bondi a Finisterre',
    year: 1998,
    releaseDate: '18 de noviembre de 1998',
    category: 'estudio',
    cover: 'albums/ultimo-bondi-a-finisterre/cover.jpg',
    position: 9,
    tagline: 'Samplers, computadoras y el primer disco grabado en Luzbola.',
    description:
      'Publicado de manera independiente. Es el primer disco grabado en Luzbola, el estudio hogareño del Indio Solari, con más samplers y recursos de estudio que los anteriores. Fue el primero con Hernán Aramberri como integrante oficial. Incluye «Gualicho», «Pogo» y «La pequeña novia del carioca».',
    tracks: tracks([
      'Las increíbles andanzas del Capitán Buscapina en Cybersiberia',
      'Estás frito, angelito',
      'El árbol del gran bonete',
      'Gualicho',
      'Pogo',
      'Alien Duce',
      'La pequeña novia del carioca',
      'Drogocop',
      'Scaramanzia',
      'Esto es to-to-todo amigos!',
    ]),
  },
  {
    id: 'momo-sampler',
    title: 'Momo Sampler',
    year: 2000,
    releaseDate: '17 de noviembre de 2000',
    category: 'estudio',
    cover: 'albums/momo-sampler/cover.jpg',
    position: 10,
    tagline: 'El último disco de estudio: experimentación, sampleos y carnaval.',
    description:
      'Décimo y último álbum de estudio, editado por Patricio Rey Discos. Sigue la línea experimental del anterior, con sampleos, electrónica y ritmos de murga. Se presentó el 22 y el 23 de abril de 2001 en el Estadio Centenario de Montevideo.',
    tracks: tracks(
      [
        'Templo de Momo',
        'Morta punto com',
        'La murga de los renegados',
        'Dr. Saturno',
        'La murga de la virgencita',
        'Pool, Averna y Papusa',
        'Murga purga',
        'Sheriff',
        'Pensando como una acelga',
        'Una piba con la remera de Greenpeace...',
        'Rato molhado',
      ],
      ['3:21', '3:13', '4:45', '5:27', '4:52', '4:54', '3:25', '5:57', '4:37', '3:38', '4:11'],
    ),
  },
  {
    id: 'en-directo',
    title: 'En directo',
    year: 1992,
    category: 'vivo',
    cover: 'albums/en-directo/cover.jpg',
    position: null,
    tagline: 'El primer disco en vivo, registrado en Obras Sanitarias.',
    description:
      'Primer álbum en vivo de la banda, editado en 1992 por Del Cielito Records y registrado en el estadio Obras Sanitarias, de Buenos Aires.',
    tracks: tracks([
      'Nuestro amo juega al esclavo',
      'Barbazul versus el amor letal',
      'Yo no me caí del cielo',
      'Héroe del whisky',
      'La parabellum del buen psicópata',
      'Maldición, va a ser un día hermoso',
      'El blues del noticiero',
      'Todo un palo',
      'Unos pocos peligros sensatos',
      'Criminal mambo',
      'Rock para los dientes',
      'Vamos las bandas',
    ]),
  },
];

export const studioAlbums = albums.filter((a) => a.category === 'estudio');

export const categoryLabel: Record<AlbumCategory, string> = {
  estudio: 'Álbum de estudio',
  vivo: 'Álbum en vivo',
};

export const categoryFilterLabel: Record<AlbumCategory, string> = {
  estudio: 'Estudio',
  vivo: 'En vivo',
};

export function getAlbumById(id: string): Album | undefined {
  return albums.find((a) => a.id === id);
}

export function getNeighbors(album: Album): { prev?: Album; next?: Album } {
  const same = albums.filter((a) => a.category === album.category);
  const i = same.findIndex((a) => a.id === album.id);
  return { prev: same[i - 1], next: same[i + 1] };
}

export function coverUrl(album: Album): string {
  return `${import.meta.env.BASE_URL}${album.cover}`;
}
