import { Field, Form, Formik } from "formik";
import { BsSearch } from "react-icons/bs";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  function validateInput(values) {
    let errors = {};
    if (!values.searchwords) {
      errors.searchwords = "Required";
    }
    return errors;
  }
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ searchwords: "" }}
        onSubmit={onSubmit}
        validate={validateInput}
      >
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="searchwords"
          />
          <button className={css.button} type="submit">
            <BsSearch className={css.iconbtn} />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
// 647868
//Access key _M2rXGxlX9xDK1iu9GI31ka_JVewW7yHFos3Jc0kt_k
//Secret key 6KQHeHwgks1F42jK1HpbiDInW8uZZkDmBXpaI7cvxNY
