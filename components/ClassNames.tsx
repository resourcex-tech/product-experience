export default function ClassNames(...classNames: any) {
  return classNames.filter(Boolean).join(" ");
}
