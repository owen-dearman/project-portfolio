export type sketchButtonObject = { img: string; link: string };

export function imageLinkConversion(
  imgArr: string[],
  linkArr: string[]
): sketchButtonObject[] {
  const sketchButtonArr = [];
  for (let i = 0; i < linkArr.length; i++) {
    const currentLink = linkArr[i];
    const currentImg = imgArr[i];
    const sketchButtonObject = { img: currentImg, link: currentLink };
    sketchButtonArr.push(sketchButtonObject);
  }
  return sketchButtonArr;
}
