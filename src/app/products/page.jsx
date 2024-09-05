import Link from "next/link";

export default function Products() {
  return (
    <div className="">
      <ul className="font-bold text-xl">
      <Link href={`/products/1`}><li id='1'>Prouct 1</li></Link>        
         <li id='2'>Product 2</li>        
         <li id='2'>Product 3</li>        
      </ul>
    </div>
  );
}
