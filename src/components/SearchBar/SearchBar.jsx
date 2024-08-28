import { Field, Form, Formik } from "formik";

export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <Formik initialValues={{ searchwords: "" }} onSubmit={onSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchwords"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
// 647868
//Access key _M2rXGxlX9xDK1iu9GI31ka_JVewW7yHFos3Jc0kt_k
//Secret key 6KQHeHwgks1F42jK1HpbiDInW8uZZkDmBXpaI7cvxNY
