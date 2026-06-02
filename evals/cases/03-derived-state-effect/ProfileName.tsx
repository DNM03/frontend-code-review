"use client";

import { useEffect, useState } from "react";

type ProfileNameProps = {
  firstName: string;
  lastName: string;
};

export function ProfileName({ firstName, lastName }: ProfileNameProps) {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  return <h1>{fullName}</h1>;
}
