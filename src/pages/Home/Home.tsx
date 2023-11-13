import { Album } from "@components/Photo/Album";
import { Post } from "@components/Post/Post";
import { AlbumModel } from "@models/albumModels";
import { PostModel } from "@models/postModels";
import { Button, CircularProgress, Grid } from "@mui/material";
import { AlbumsService } from "@services/albumsService";
import { PostsService } from "@services/postsService";
import { useEffect, useState } from "react";

export const HomePage: React.FC = () => {
  const [albums, setAlbums] = useState<AlbumModel[]>([]);
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const albumsService = new AlbumsService();
      const postsService = new PostsService();

      const [fetchedAlbums, fetchedPosts] = await Promise.all([
        albumsService.getAlbums(page),
        postsService.getPosts(page),
      ]);

      setAlbums(fetchedAlbums);
      setPosts(fetchedPosts);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div>
      <Grid container spacing={2}>
        {albums.map((album) => (
          <Grid item key={album.id} xs={12} md={6}>
            <Album album={album} />
          </Grid>
        ))}
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} md={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: 16 }}>
        <Button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Previous
        </Button>
        <Button onClick={() => handlePageChange(page + 1)}>Next</Button>
      </div>
    </div>
  );
};
