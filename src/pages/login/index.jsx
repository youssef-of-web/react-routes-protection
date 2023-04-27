import React from "react";
import * as Flowbite from "flowbite-react";

function Login() {
  return (
    <form className="flex flex-col gap-4 p-5">
      <div>
        <div className="mb-2 block">
          <Flowbite.Label htmlFor="email1" value="Your email" />
        </div>
        <Flowbite.TextInput
          id="email1"
          type="email"
          placeholder="name@flowbite.com"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Flowbite.Label htmlFor="password1" value="Your password" />
        </div>
        <Flowbite.TextInput id="password1" type="password" required={true} />
      </div>
      <div className="flex items-center gap-2">
        <Flowbite.Checkbox id="remember" />
        <Flowbite.Label htmlFor="remember">Remember me</Flowbite.Label>
      </div>
      <Flowbite.Button type="submit">Submit</Flowbite.Button>
    </form>
  );
}

export default Login;
