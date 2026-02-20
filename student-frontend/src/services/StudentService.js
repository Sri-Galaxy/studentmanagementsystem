const BASE_URL = "http://localhost:8081/students";

export const getStudents = () => {
  return fetch(BASE_URL).then(res => res.json());
};

export const deleteStudent = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};

export const addFullTimeStudent = (student) => {
  return fetch(`${BASE_URL}/fulltime`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  }).then(res => res.json());
};

export const addPartTimeStudent = (student) => {
  return fetch(`${BASE_URL}/parttime`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(student)
  }).then(res => res.json());
};
