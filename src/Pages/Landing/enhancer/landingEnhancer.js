import { withFormik } from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    first_name: Yup.string().trim().max(60).required("Please enter first name"),
    last_name: Yup.string().trim().max(60).required("Please enter last name"),
    jobtitle: Yup.string().trim().max(60).required("Please enter job title"),
    country: Yup.string()
      .trim()
      .max(60)
      .required("Please enter country or region"),
    company_name: Yup.string()
      .trim()
      .max(60)
      .required("Please enter company name"),
    email: Yup.string()
      .trim()
      .email("The email you have entered is invalid")
      .max(60)
      .required("Please enter email"),
    hasPhone: Yup.boolean().default(false),
    phone: Yup.string().when("hasPhone", {
      is: (value) => (value === true ? true : false),
      then: () =>
        Yup.string()
          .max(10, "Please enter valid 10 digit phone number")
          .min(10, "Please enter valid 10 digit phone number"),
      otherwise: () => Yup.string().nullable(),
    }),
  }),
  validateOnMount: true,
  mapPropsToValues: (props) => ({
    first_name: "",
    last_name: "",
    jobtitle: "",
    country: "",
    email: "",
    company_name: "",
    phone: "",
    hasPhone: false,
  }),
  handleSubmit: () => {},
  displayName: "CustomValidationForm",
  enableReinitialize: true,
});

export default formikEnhancer;
