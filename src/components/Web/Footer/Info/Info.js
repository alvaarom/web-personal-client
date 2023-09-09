import React from "react";
import { Button, Image } from "semantic-ui-react";
import { map } from "lodash";
import { Icon } from "../../../../assets";
import { socialData } from "../../../../utils";

import "./Info.scss";

export function Info() {
  return (
    <div className="footer-info">
      <Image src={Icon.LogoWhite} className="logo" />
      <p>
        Construyendo experiencias digitales excepcionales con el stack MERN.
      </p>
      {map(socialData, (social) => (
        <Button
          key={social.type}
          as="a"
          target="_blank"
          href={social.link}
          color={social.type}
          icon={social.type}
        />
      ))}
    </div>
  );
}
