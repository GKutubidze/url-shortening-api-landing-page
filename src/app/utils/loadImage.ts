type ImageDimensions = {
    width: number;
    height: number;
  };
  
  type SetImageDimensions = React.Dispatch<React.SetStateAction<ImageDimensions>>;
  
  export const loadImage = (setImageDimensions: SetImageDimensions, imageUrl: string): void => {
    const img = new Image();
    img.src = imageUrl;
  
    img.onload = () => {
      setImageDimensions({
        height: img.height,
        width: img.width
      });
    };
    img.onerror = (err: Event | string) => {
      console.log("img error");
      console.error(err);
    };
  };
  