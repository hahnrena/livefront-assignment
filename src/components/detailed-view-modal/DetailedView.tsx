import { ISelectedItem, SearchType } from "../../models/search";
import AlbumDetail from "./AlbumDetail";
import ArtistDetail from "./ArtistDetail";

interface IDetailViewProps<T extends SearchType> {
  selectedItem: ISelectedItem<T>;
}

const DetailView = <T extends SearchType>({
  selectedItem,
}: IDetailViewProps<T>) => {
  return (
    <div>
      {selectedItem?.type === "album" && (
        <AlbumDetail selectedAlbum={selectedItem} />
      )}
      {selectedItem.type === "artist" && <ArtistDetail artist={selectedItem} />}
    </div>
  );
};

export default DetailView;
