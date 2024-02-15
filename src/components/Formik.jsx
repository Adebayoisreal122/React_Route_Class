
import { useFormik } from "formik"
import * as yup from "yup"


const FormikSignup = () => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const validationSchema = yup.object({
        firstName: yup.string().required("required").min(4, "minimum of four character" ).max(10, "maximum of ten character"),
        secondName: yup.string().required("required").min(4, "minimum of four character" ).max(10, "maximum of ten character"),
        userName: yup.string().required("required").min(4, "minimum of four character" ).max(10,"maximum of ten character" ),
        email: yup.string().email("enter valid email address"),
        password: yup.string().matches(passwordRegex, "The password must be at least 8 character, and should include one uppercase, one lowercase" ),
      });


    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            userName: '',
            email: '',
            password: '',



        },
        validationSchema: validationSchema,
        onSubmit: values => {
          console.log(values)
        },
      });

  return (

    <>


<center>
        <form  onSubmit={formik.handleSubmit} className="form">
            <p className="title">Register </p>
            <p className="message">Signup now and get full access to our app. </p>
               
                <label>
                    <input name="firstName" required="" placeholder="" type="text"
                    onChange={formik.handleChange}
                    className="input"/>
                    <span>Firstname</span>
                </label>
                <span className="text-danger">{formik.errors.firstName}</span>
        
                <label>
                    <input name="secondName" required="" placeholder="" type="text"
                     onChange={formik.handleChange}
                    className="input"/>
                    <span>Lastname</span>
                </label>
                <span className="text-danger">{formik.errors.secondName}</span>
                
      
            
            <label>
                <input name="userName" required="" placeholder="" type="text"
                 onChange={formik.handleChange}
                className="input"/>
                <span>Username</span>
            </label> 
            <span className="text-danger">{formik.errors.userName}</span>

            <label>
                <input name="email" required="" placeholder="" type="email"
                 onChange={formik.handleChange}
                className="input"/>
                <span>Email</span>
            </label> 
            <span className="text-danger">{formik.errors.email}</span>
            <label>
                <input name="password" required="" placeholder="" type="password"
                 onChange={formik.handleChange}
                className="input"/>
                <span>Password</span>
            </label>
            <span className="text-danger">{formik.errors.password}</span>
            <button type="submit"  className="submit">Submit</button>
            <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
        </form>
    </center>
    </>
  )
}

export default FormikSignup