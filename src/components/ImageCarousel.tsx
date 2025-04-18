import { useState } from "react";
import { Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "@tanstack/react-router";
import Image from "mui-image";

type ImageCarouselType = {
  route: string;
  routeParams;
  header: string;
  images: string[];
};

export default function ImageCarousel({
  route,
  routeParams,
  header,
  images,
}: ImageCarouselType) {
  if (images.length === 0) return;

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleChangeImageBack = () => {
    const currentImageIndex = images.findIndex((x) => x === currentImage);

    if (currentImageIndex === 0) setCurrentImage(images[images.length - 1]);
    else setCurrentImage(images[currentImageIndex - 1]);
  };

  const handleChangeImageNext = () => {
    const currentImageIndex = images.findIndex((x) => x === currentImage);

    if (currentImageIndex === images.length - 1) setCurrentImage(images[0]);
    else setCurrentImage(images[currentImageIndex + 1]);
  };

  return (
    <div className="relative">
      <Link className="flex flex-col relative" to={route} params={routeParams}>
        <Typography
          className="
            absolute
            inset-x-0 top-0
            z-10
            px-1
          bg-gray-100/50
            hover:*:cursor-pointer hover:*:underline"
        >
          {header}
        </Typography>

        <Image className="z-0 rounded-sm" src={currentImage} showLoading />
      </Link>
      <Button
        className="!absolute inset-y-0 left-0 z-10"
        onClick={handleChangeImageBack}
      >
        <ArrowBackIosIcon />
      </Button>
      <Button
        className="!absolute inset-y-0 right-0 z-10"
        onClick={handleChangeImageNext}
      >
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}
