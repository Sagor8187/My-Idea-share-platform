import { FaTwitter, FaGithub, FaEnvelope, FaComments } from "react-icons/fa";
import { Button, Separator } from "@heroui/react"; 
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-16 pb-6 relative bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

    
        <div>
          <Link href="/" className="btn btn-ghost text-2xl font-bold">
            Next<span className="text-purple-700 text-xl">Idea</span>
          </Link>
          <p className="mt-4 text-sm text-default-500 leading-6">
            A platform to share, validate, and refine innovative startup ideas
            with the community.
          </p>
        </div>

  
        <div>
          <h3 className="font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-sm text-default-500">
            {["Browse Ideas", "Submit Idea", "Profile"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-default-500">
            {["Tech", "AI", "Health", "Education", "Finance", "Productivity"].map((cat) => (
              <li key={cat} className="hover:text-foreground transition-colors cursor-pointer">
                {cat}
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <div className="flex gap-3 mb-4">
            {[FaTwitter, FaGithub, FaEnvelope].map((Icon, i) => (
              <Button key={i} isIconOnly variant="flat" size="sm">
                <Icon size={16} />
              </Button>
            ))}
          </div>
          <p className="text-sm text-default-500">sdsagor8187@gmail.com</p>
        </div>
      </div>

   
      <Separator className="mt-10 mb-6" />

      <div className="flex justify-center  ">
        <p>© 2026 IdeaVault. All rights reserved.</p>
        <p>Developed by <span className="font-semibold text-foreground">Sagor</span></p>
      </div>

      {/* Floating Chat Button */}
      <Button
        isIconOnly
        
        radius="full"
        className="fixed bottom-6 right-6 shadow-lg bg-purple-700"
      >
        <FaComments size={20} />
      </Button>
    </footer>
  );
}