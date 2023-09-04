import React from "react";
import { Container } from "semantic-ui-react";
import { TopBar } from "../../components/Web";

import "./ClientLayout.scss";

export function ClientLayout(props) {
  const { children } = props;

  return (
    <div className="client-layout">
      <div className="client-layout__header">
        <TopBar />
      </div>
      {children}
      <div className="client-layout__footer">
        <Container>
          <span>INFO</span>
          <span>MENU</span>
          <span>NEWSLAETTER</span>
        </Container>
        <Container>
          <span>ALL RIGHTS RESERVED</span>
          <span>ALVARO MALVESTITI | FULL STACK DEVELOPER</span>
        </Container>
      </div>
    </div>
  );
}
