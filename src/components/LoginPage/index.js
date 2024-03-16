import { Logo } from "../Logo";
import { ButtonsBlueSection } from "../ButtonsBlueSection";
import style from "../LoginPage/style.module.css";
import EyeSvg from "../../assets/icons/eyes.svg";
import FacebookBlue from "../../assets/icons/facebookblue.svg";
import Apple from "../../assets/icons/appleicon.svg";
// import Google from "../../assets/icons/googleicon.svg";
import Google2 from "../../assets/icons/Google2.svg";

export default function LoginPage() {
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
        <input type="checkbox" />
        <label for="Remember Me" className={style.remember}>
          Remember me
        </label>
        <ButtonsBlueSection
          className={style.greenlogin}
          backgroundColor="#1ed761"
          text="LOG IN"
          width="150px"
        />
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
