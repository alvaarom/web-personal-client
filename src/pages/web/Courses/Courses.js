import React, { useState, useEffect } from "react";
import { Container, Image, Button } from "semantic-ui-react";
import { Course as CourseController } from "../../../api";
import { map } from "lodash";
import { image } from "../../../assets";
import { Course } from "../../../components/Web/Courses";

import "./Courses.scss";

const courseController = new CourseController();

export function Courses() {
  const [courses, setCourses] = useState(null);
  const [pagination, setPagination] = useState(null);
  const [page, setPage] = useState(1);
  const isCurrentLastPage = pagination?.page === pagination?.pages;

  useEffect(() => {
    (async () => {
      try {
        const response = await courseController.getCourses({ page, limit: 9 });
        setPagination({
          page: response.page,
          pages: response.pages,
        });
        if (!courses) setCourses(response.docs);
        else setCourses([...courses, ...response.docs]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [page]);

  const loadMore = () => setPage((prevState) => prevState + 1);

  return (
    <Container className="courses-page">
      <Image src={image.academyLogo} />
      <h2>
        Mi camino de aprendizaje y crecimiento constante. En esta sección,
        puedes explorar los certificados y cursos que he completado en mi viaje
        como desarrollador web y móvil full stack.
      </h2>

      <div className="courses">
        {map(courses, (course) => (
          <div key={course._id} className="courses__item">
            <Course course={course} />
          </div>
        ))}
      </div>

      {!isCurrentLastPage && (
        <div className="more" onClick={loadMore}>
          <Button primary>Cargar mas..</Button>
        </div>
      )}
    </Container>
  );
}
