import React from "react";
import Image from "next/image";

interface NmageProps {
  src: string;
  layout?: "intrinsic" | "fixed" | "responsive" | "fill";
  width?: number;
  height?: number;
  remote?: boolean;
  blurDataURL?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Nmage: React.FC<NmageProps> = ({
  src,
  layout = "intrinsic",
  width = 20,
  height = 20,
  remote,
  blurDataURL,
  alt = "",
  className,
  style,
}) => {
  return (
    <Image
      className={className}
      style={style}
      src={src}
      alt={alt}
      width={width}
      height={height}
      // loader={loadah}
      blurDataURL={blurDataURL}
    />
  );
};

export default Nmage;
