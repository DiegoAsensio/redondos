import { useParams } from 'react-router-dom';
import { AlbumDetail } from '../components/AlbumDetail/AlbumDetail';
import { getAlbumById } from '../data/albums';
import NotFound from './NotFound';

export default function AlbumPage() {
  const { id } = useParams();
  const album = id ? getAlbumById(id) : undefined;
  if (!album) return <NotFound />;

  return <AlbumDetail key={album.id} album={album} />;
}
