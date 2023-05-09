import * as Yup from "yup";

export const formValidation = Yup.object({
  email: Yup.string().email().required("Please Enter Your email"),
  password: Yup.string()
    .min(8)
    .max(16)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%^&*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Please enter your password"),
});
