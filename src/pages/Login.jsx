import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userAuth } from "../context/Authcontext";

const Login = () => {
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { user, login } = userAuth();
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlelogin();
    }
  };
  return (
    <>
      <div className="w-full h-full">
        <img
          className="hidden object-cover  sm:block absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="netflix"
        />
        <div className="bg-black/50 fixed top-0 left-0 h-full w-full" />
        <div>
          <div className="fixed w-full px-4 py-24 z-20">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black/60 rounded-lg border border-white">
              <div className="max-w-[320px] py-16 mx-auto">
                <h1 className="text-white text-3xl font-bold">Log in</h1>
                <form
                  className="w-full flex flex-col py-4"
                  onSubmit={handlelogin}
                >
                  <input
                    className="bg-gray-500 p-3 my-2 rounded-md text-white"
                    type="email"
                    placeholder="Enter email .. "
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="bg-gray-500 p-3 my-2 rounded-md text-white"
                    type="password"
                    placeholder="Enter Password .. "
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button className=" mx-auto bg-red-600 py-3 my-3 rounded-2xl w-full hover:bg-red-700 duration-500 cursor-pointer">
                    Log in
                  </button>

                  <div className=" flex  items-center justify-between text-gray-300 cursor-pointer">
                    <p>
                      <input
                        type="checkbox"
                        className="mr-2 md:text-sm sm:text-xs"
                        checked={remember}
                        onChange={(e) => setRemember(!remember)}
                      />
                      Remember Me
                    </p>
                    <p>Need Help ?</p>
                  </div>
                  <div className="p-4 my-4 text-gray-500 md:text-sm sm:text-xs">
                    <p>
                      New to NetFlix ?/{" "}
                      <Link to="/signup">
                        <span
                          className="text-xl text-white"
                          onKeyPress={handleKeyPress}
                        >
                          Sign up
                        </span>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
