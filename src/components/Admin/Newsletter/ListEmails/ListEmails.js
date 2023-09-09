import React, { useState, useEffect } from "react";
import { Loader, Pagination } from "semantic-ui-react";
import { map, size } from "lodash";
import { Newsletter } from "../../../../api";
import { useAuth } from "../../../../hooks";
import { EmailItem } from "../EmailItem";

import "./ListEmails.scss";

const newsletterController = new Newsletter();

export function ListEmails() {
  const [email, setEmail] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const [reload, setReload] = useState(false);
  const { accessToken } = useAuth();

  const changePage = (_, data) => {
    setPage(data.activePage);
  };

  const onReload = () => setReload((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        const response = await newsletterController.getNewsletters(
          accessToken,
          page
        );
        setEmail(response.docs);
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
  }, [page, reload]);

  if (!email) return <Loader active inline="centered" />;
  if (size(email) === 0) return "No hay emails registrados";

  return (
    <div className="list-emails">
      {map(email, (item) => (
        <EmailItem key={item._id} email={item} onReload={onReload} />
      ))}
      <div className="list-emails__pagination">
        <Pagination
          totalPages={pagination.pages}
          defaultActivePage={pagination.page}
          ellipsisItem={false}
          firstItem={false}
          lastItem={false}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
}
