import React from "react";

export function AdminLayout(props) {
  const { children } = props;

  return (
    <div>
      <h2>Admin Layout</h2>
      {children}
    </div>
  );
}
