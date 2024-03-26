import { Logo } from "../Logo";
import { ButtonsBlueSection } from "../ButtonsBlueSection";
import style from "../LoginPage/style.module.css";
import EyeSvg from "../../assets/icons/eyes.svg";
import FacebookBlue from "../../assets/icons/facebookblue.svg";
import Apple from "../../assets/icons/appleicon.svg";
// import Google from "../../assets/icons/googleicon.svg";
import Google2 from "../../assets/icons/Google2.svg";
// import { useNavigation } from "react-router-dom";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { navigate } = useNavigation();
  console.log({
    password,
    email,
    rememberMe,
  });
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRememberMeCheckbox = (event) => {
    setRememberMe(event.target.checked);
  };
  const handleLogin = () => {
    setIsSubmitting(true);
    const payload = { username: email, password, rememberMe };
    console.log({ payload }, "im inside handlelogin");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (response.status >= 400) {
          const data = await response.json();
          throw data;
        }
        return response.json();
      })

      .then((response) => {
        console.log("i got a login success", response);
      })
      .catch((error) => {
        console.log("i got a login error", error.message);

        toast.error(error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <section className={style.loginpage}>
      <header className={style.header}>
        <Logo />
      </header>
      <hr className={style.headerline}></hr>
      <div className={style.buttons}>
        <ButtonsBlueSection
          img={FacebookBlue}
          backgroundColor="#1c74de"
          text="CONTINUE WITH FACEBOOK"
          width="500px"
          svgClass={style["fb-svg"]}
        />
        <ButtonsBlueSection
          img={Apple}
          backgroundColor="black"
          text="CONTINUE WITH APPLE"
          width="500px"
          svgClass={style["apple-svg"]}
        />
        <ButtonsBlueSection
          className={style.buttonlogin}
          img={Google2}
          backgroundColor="white"
          text="CONTINUE WITH GOOGLE"
          border="2px solid #d9dadc"
          width="500px"
          svgClass={style["google-svg"]}
        />
      </div>
      <h2 className={style.h2}>
        <span>OR</span>
      </h2>
      <div class="container">
        <form action="#" method="post" className={style.form}>
          <div class="form-group">
            <label for="email" className={style.email}>
              Email Address or Username
            </label>
            <input
              onChange={handleEmail}
              className={style.input}
              type="text"
              id="email"
              name="email"
              required
              placeholder="Email address or username"
            />
          </div>
          <div class="form-group">
            <label for="password" className={style.label}>
              Password
              <img src={EyeSvg} alt="eyelogo" className={style.eye} />
            </label>
            <input
              onChange={handlePassword}
              className={style.input}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
        </form>
        <h3 className={style.h3}>Forgot your password?</h3>
      </div>
      <div>
        <input
          onChange={handleRememberMeCheckbox}
          type="checkbox"
          id="remember-me"
          className={style.checkbox}
        />
        <label htmlFor="Remember Me" className={style.remember}>
          Remember me
        </label>
        {/* <link to="/dashboard"> */}
        <ButtonsBlueSection
          className={style.greenlogin}
          backgroundColor="#1ed761"
          text="LOG IN"
          width="150px"
          onClick={handleLogin}
          disabled={isSubmitting}
        />
        {/* </link> */}
      </div>
      <hr className={style.hr}></hr>
      <h3>Do you have an account?</h3>
      <ButtonsBlueSection
        className={style.buttonlogin}
        backgroundColor="white"
        text="SIGN UP FOR SPOTIFY"
        width="500px"
        border="2px solid #d9dadc"
      />
    </section>
  );
}
