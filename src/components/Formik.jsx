
import { useFormik } from "formik"


const FormikSignup = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            secondName: '',
            userName: '',
            email: '',
            password: '',




        },
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
                <div className="flex">
                <label>
                    <input name="firstName" required="" placeholder="" type="text"
                    onChange={formik.handleChange}
                    className="input"/>
                    <span>Firstname</span>
                </label>
        
                <label>
                    <input name="secondName" required="" placeholder="" type="text"
                     onChange={formik.handleChange}
                    className="input"/>
                    <span>Lastname</span>
                </label>
                
            </div>  
            
            <label>
                <input name="userName" required="" placeholder="" type="text"
                 onChange={formik.handleChange}
                className="input"/>
                <span>Username</span>
            </label> 

            <label>
                <input name="email" required="" placeholder="" type="email"
                 onChange={formik.handleChange}
                className="input"/>
                <span>Email</span>
            </label> 
                
            <label>
                <input name="password" required="" placeholder="" type="password"
                 onChange={formik.handleChange}
                className="input"/>
                <span>Password</span>
            </label>
            <button type="submit"  className="submit">Submit</button>
            <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
        </form>
    </center>
    </>
  )
}

export default FormikSignup