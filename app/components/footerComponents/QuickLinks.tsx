import Link from "next/link"
import { cn } from "@/app/lib/utils"

type LinkItem =  {
    label: string;
    href: string
}

type quickLinkProps = {
    title: string,
    links : LinkItem[],
    className?: string
    href ?: string,
    label ?: string

}


const QuickLinks = (props: quickLinkProps) => {
  return (
    <div className={cn("flex flex-col gap-3", props.className)}>
     <h1 className="font-medium">{props.title}</h1>   
    
    <ul className="gap-5">
        {props.links.map((link, index) => (
            <li key={index}>
                <Link href={link.href} className="text-sm text-gray-600 hover:text-black transition ">{link.label}</Link>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default QuickLinks