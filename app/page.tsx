let a = true;
let b = false;

export default function Home() {
  return <div>{(console.log(a), console.log(b))}</div>;
}
