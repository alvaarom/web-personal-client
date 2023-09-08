import React, { useEffect, useState } from "react";
import { Loader, Pagination } from "semantic-ui-react";
import { map } from "lodash";
import { Post } from "../../../../api";
import { ListPostItem } from "../ListPostItem";

import "./ListPosts.scss";

const postController = new Post();

export function ListPosts() {
  const [posts, setPosts] = useState(null);
  const [pagination, setPagination] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      try {
        const response = await postController.getPosts(page);
        setPosts(response.docs);
        setPagination({
          limit: response.limit,
          page: response.page,
          pages: response.pages,
          total: response.total,
        });
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);

  const changePage = (_, data) => {
    const newPage = data.activePage;
    setPage(newPage);
  };

  if (!posts) return <Loader active inline="centered" />;

  return (
    <div className="list-posts-web">
      <div className="list">
        {map(posts, (post) => (
          <div key={post._id} className="item">
            <ListPostItem post={post} />
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.page}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          secondary
          pointing
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
