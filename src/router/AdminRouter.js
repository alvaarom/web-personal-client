import React from "react";
import { Routes, Route } from "react-router-dom";
import { map } from "lodash";

import { AdminLayout } from "../layouts";
import { Auth, Users, Blog, Courses, Menu, Newsletter } from "../pages/admin";

const user = null;

export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      {!user ? (
        <Route path="/admin/*" element={<Auth />} />
      ) : (
        <>
          {["/admin", "/admin/blog"].map((path) => (
            <Route
              path={path}
              key={path}
              element={loadLayout(AdminLayout, Blog)}
            />
          ))}
          <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
          <Route
            path="/admin/courses"
            element={loadLayout(AdminLayout, Courses)}
          />
          <Route path="/admin/menu" element={loadLayout(AdminLayout, Menu)} />
          <Route
            path="/admin/newslatter"
            element={loadLayout(AdminLayout, Newsletter)}
          />
        </>
      )}
    </Routes>
  );
}