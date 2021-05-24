import styles from "../../styles/Articles.module.css";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import CustomTextField from "../Helpers/CustomTextField";
import CustomModal from "../Helpers/CustomModal";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "../../config";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

const AddArticle = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const initialValues = {
    title: "",
    description: "",
  };

  const handleModal = () => {
    setOpen(!open);
  };
  const getValidations = () => {
    return Yup.object({
      title: Yup.string()
        .max(150, "Must be 150 characters or less")
        .required("Required"),
      description: Yup.string()
        .max(1000, "Must be 20 characters or less")
        .required("Required"),
    });
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    setSubmitting(true);

    const url = `${BASE_URL}articles`;
    const payload = {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(url, payload);

    const { status, message } = await res.json();

    if (status) {
      setOpen(false);
      setTimeout(() => {
        window.location.reload();
      }, 50);
    } else {
      setErrors({
        title: message,
      });
    }

    setSubmitting(false);
  };

  return (
    <div className={styles.addArticle}>
      <Button
        variant="contained"
        color="primary"
        className="float-right bg-primary"
        onClick={handleModal}
      >
        Add Article
      </Button>
      <CustomModal
        component={
          <>
            <Formik
              initialValues={initialValues}
              validationSchema={getValidations()}
              onSubmit={(values, { setSubmitting, setErrors }) => {
                handleSubmit(values, { setSubmitting, setErrors });
              }}
            >
              {({
                values,
                handleSubmit,
                isSubmitting,
                errors,
                touched,
                handleChange,
              }) => (
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <FormGroup>
                    <CustomTextField
                      required={true}
                      label="Title"
                      name="title"
                      autoFocus={true}
                      onChange={handleChange}
                      error={errors.title && touched.title}
                      value={values.title}
                    />
                    <ErrorMessage
                      name="title"
                      component="label"
                      className="mb-0 error-label small"
                    />
                  </FormGroup>
                  <FormGroup>
                    <CustomTextField
                      required={true}
                      label="Description"
                      name="description"
                      multiline={true}
                      rows={5}
                      onChange={handleChange}
                      error={errors.description && touched.description}
                      value={values.description}
                    />
                    <ErrorMessage
                      name="description"
                      component="label"
                      className="mb-0 error-label small"
                    />
                  </FormGroup>
                  <div className="mt-2">
                    <Button
                      variant="contained"
                      className="float-right"
                      onClick={handleModal}
                    >
                      Close
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isSubmitting}
                      className="float-right bg-primary mr-1"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </Formik>
          </>
        }
        open={open}
      />
    </div>
  );
};

export default AddArticle;
