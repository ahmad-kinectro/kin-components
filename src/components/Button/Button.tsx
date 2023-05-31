import React from "react";
import classNames from "classnames";
import "../../styles/index.scss";
type ButtonType = "button" | "submit" | "reset";
type ButtonVariants =
  | "primary"
  | "secondary"
  | "text"
  | "icon"
  | "danger"
  | "warning";

type Sizes = "small" | "medium" | "large";

type StyleSizes = "sm" | "md" | "lg";
type Rounded = "sm" | "md" | "lg" | "xl" | "xxl" | "full";

type FontWeights =
  | "normal"
  | "bold"
  | "lighter"
  | "bolder"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  label?: string;
  type?: ButtonType;

  variant?: ButtonVariants;
  disabled?: boolean;
  size?: Sizes;
  font?: StyleSizes;
  rounded?: Rounded;
  fontWeight?: FontWeights;

  textColor?: string;
  bgColor?: string;
}

const Button = (props: ButtonProps) => {
  const button = "kui-button";
  const classes = classNames({
    [button]: button,
    [`${button}--${props.variant}`]: props.variant,
    [`${button}--size-${props.size}`]: props.size,
    [`${button}--font-weight-${props.fontWeight}`]: props.fontWeight,
    [`${button}--rouned-${props.rounded}`]: props.rounded,
  });
  return (
    <button
      type={props.type ?? "button"}
      className={`${classes} ${props.className ?? ""}`}
      disabled={props.disabled}
    >
      {props.children ?? props.label}
    </button>
  );
};

export default Button;
