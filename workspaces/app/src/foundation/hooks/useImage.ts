import { useEffect, useState } from 'react';


import { getImageUrl } from '../../lib/image/getImageUrl';

export const useImage = ({ height, imageId, width }: { height: number; imageId: string; width: number }) => {
  const [imageUrl, setImageUrl] = useState<string| null>(null);

  useEffect(() => {
    const dpr = window.devicePixelRatio;
    const img = new Image();

    img.onload = () => {
      setImageUrl(img.src);
    };

    img.src = getImageUrl({
      format: 'jpg',
      height: height * dpr,
      imageId,
      width: width * dpr,
    });
  }, [height, imageId, width]);

  return imageUrl;
};
