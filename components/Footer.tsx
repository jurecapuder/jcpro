import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2023 JC Mastery Pro | All Right Reserved</p>

      <div className="flex gap-x-9">
        <Link href="/terms-of-use"> Terms & COnditions </Link>

        <Link href="/privacy-policy"> Privacy Policy </Link>
      </div>
    </footer>
  )
}

export default Footer